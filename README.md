[Veja o site ao vivo — https://nort-dev-v2.vercel.app/](https://nort-dev-v2.vercel.app/)

# NortDev_V2 — Site institucional

Site institucional da North Dev: SPA em React + Vite, usando CSS Modules, design tokens e toggle de tema (dark/light).

## Recursos
- React 18 + Vite 5
- CSS Modules e tokens em [src/styles/tokens.css](src/styles/tokens.css)
- Tema claro/escuro com persistência em localStorage (`northdev:theme`)
- Formulário de contato (Formspree placeholder — use `VITE_FORMSPREE_ID`)
- Logos e assets estáticos em [public/](public/) ou [src/assets/](src/assets/)

## Como rodar localmente

```bash
npm install
npm run dev
# build de produção
npm run build
# verificar build local
npm run preview
```

## Observações sobre deploy (Vercel)
- Garanta que imagens usadas por caminhos absolutos (por exemplo `/logo_escrita_NorthDev.png`) estejam em [public/](public/). O Vite copia automaticamente arquivos dentro de `public/` para `dist/`.
- Alternativa: importe imagens a partir de [src/assets/](src/assets/) para que o Vite as inclua no bundle.
- Se ocorrer `Exit code 126` no Vercel, ajuste o `build` script no `package.json` para:

```json
"build": "node node_modules/vite/bin/vite.js build"
```

e defina a versão do Node para 18 no painel do Vercel.
- Não esqueça de adicionar a variável de ambiente `VITE_FORMSPREE_ID` no Vercel para que o formulário funcione.

## Estrutura (resumo)
- [public/](public/) — arquivos estáticos servidos diretamente (favicons, imagens que precisam de caminho fixo)
- [src/](src/) — código fonte (components, styles, hooks)
- [dist/](dist/) — saída do build

## Contribuições
1. Fork
2. Crie uma branch
3. Faça alterações, commit e PR

## Licença
Sem licença especificada — adicione um arquivo LICENSE se desejar.
