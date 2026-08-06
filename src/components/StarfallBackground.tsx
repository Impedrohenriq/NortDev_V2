import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type StarfallPalette = 'blue' | 'violet' | 'orange' | 'pink' | 'green' | 'gray';

const paletteColors: Record<StarfallPalette, [string, string, string]> = {
  blue: ['#4f8cff', '#35d5f4', '#8d73ff'],
  violet: ['#8784ff', '#705df2', '#6ebbf3'],
  orange: ['#ff7850', '#ffa257', '#fbb606'],
  pink: ['#ff5b86', '#ff7850', '#ffa257'],
  green: ['#34d399', '#6ee7b7', '#a7f3d0'],
  gray: ['#94a3b8', '#e2e8f0', '#64748b'],
};

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float iTime;
  uniform vec2 iResolution;
  uniform float iLight;
  uniform vec3 iAccentA;
  uniform vec3 iAccentB;
  uniform vec3 iAccentC;

  float random(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(random(i), random(i + vec2(1.0, 0.0)), f.x),
      mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    mat2 rotation = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p = rotation * p * 2.04 + 13.7;
      amplitude *= 0.48;
    }
    return value;
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
    float time = iTime * 0.055;
    float field = fbm(uv * 2.25 + vec2(time, -time * 0.55));
    float veil = fbm(uv * 3.2 + vec2(-time * 0.7, time));
    float glow = smoothstep(0.18, 0.95, field + veil * 0.52);
    float horizon = exp(-3.8 * abs(uv.y + 0.06 + sin(uv.x * 2.1 + time) * 0.09));

    vec3 navy = vec3(0.008, 0.014, 0.045);
    vec3 darkColor = navy;
    darkColor += iAccentA * glow * 0.52;
    darkColor += mix(iAccentB, iAccentC, smoothstep(-0.5, 0.7, uv.x)) * horizon * glow * 0.65;

    vec3 lightColor = vec3(0.965, 0.978, 1.0);
    lightColor += iAccentA * glow * 0.035;
    lightColor += mix(iAccentB, iAccentC, smoothstep(-0.5, 0.7, uv.x)) * horizon * glow * 0.10;

    float vignette = smoothstep(1.25, 0.18, length(uv * vec2(0.78, 1.05)));
    darkColor *= vignette;
    lightColor = mix(vec3(0.925, 0.95, 0.99), lightColor, vignette);
    gl_FragColor = vec4(clamp(mix(darkColor, lightColor, iLight), 0.0, 1.0), 1.0);
  }
`;

export function StarfallBackground({ palette = 'blue' }: { palette?: StarfallPalette }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'high-performance' });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const [accentA, accentB, accentC] = paletteColors[palette];
    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        iLight: { value: document.documentElement.classList.contains('dark') ? 0 : 1 },
        iAccentA: { value: new THREE.Color(accentA) },
        iAccentB: { value: new THREE.Color(accentB) },
        iAccentC: { value: new THREE.Color(accentC) },
      },
      vertexShader,
      fragmentShader,
    });
    const mesh = new THREE.Mesh(geometry, material);
    let animationFrame = 0;
    let lastTime = performance.now();
    let isVisible = true;

    scene.add(mesh);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.domElement.setAttribute('aria-hidden', 'true');
    mount.appendChild(renderer.domElement);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height, false);
      material.uniforms.iResolution.value.set(width, height);
      renderer.render(scene, camera);
    };

    const syncTheme = () => {
      material.uniforms.iLight.value = document.documentElement.classList.contains('dark') ? 0 : 1;
      renderer.render(scene, camera);
    };

    const themeObserver = new MutationObserver(syncTheme);

    const render = (now: number) => {
      if (!isVisible) {
        animationFrame = 0;
        return;
      }
      material.uniforms.iTime.value += Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(render);
    };

    const startRendering = () => {
      if (reduceMotion || animationFrame || !isVisible) return;
      lastTime = performance.now();
      animationFrame = window.requestAnimationFrame(render);
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          renderer.render(scene, camera);
          startRendering();
        } else if (animationFrame) {
          window.cancelAnimationFrame(animationFrame);
          animationFrame = 0;
        }
      },
      { rootMargin: '120px 0px' },
    );

    resize();
    window.addEventListener('resize', resize);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    visibilityObserver.observe(mount);
    if (reduceMotion) renderer.render(scene, camera);
    else startRendering();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      themeObserver.disconnect();
      visibilityObserver.disconnect();
      mesh.removeFromParent();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [palette]);

  return <div ref={mountRef} className="starfall-background" aria-hidden="true" />;
}
