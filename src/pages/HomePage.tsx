import { Contact } from '../sections/Contact';
import { Hero } from '../sections/Hero';
import { HomeOverview } from '../components/HomeOverview';
import { Projects } from '../sections/Projects';
import { ProspecLaunch } from '../sections/ProspecLaunch';

export function HomePage() {
  return (
    <>
      <Hero />
      <ProspecLaunch />
      <Projects featured />
      <HomeOverview />
      <Contact />
    </>
  );
}
