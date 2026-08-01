import type { Theme } from '../hooks/useTheme';
import { Contact } from '../sections/Contact';
import { Hero } from '../sections/Hero';
import { HomeOverview } from '../components/HomeOverview';

type HomePageProps = {
  theme: Theme;
};

export function HomePage({ theme }: HomePageProps) {
  return (
    <>
      <Hero theme={theme} />
      <HomeOverview />
      <Contact />
    </>
  );
}
