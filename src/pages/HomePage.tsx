import { Contact } from '../sections/Contact';
import { Hero } from '../sections/Hero';
import { HomeOverview } from '../components/HomeOverview';
import { ProspecLaunch } from '../sections/ProspecLaunch';

export function HomePage() {
  return (
    <>
      <Hero />
      <ProspecLaunch />
      <HomeOverview />
      <Contact />
    </>
  );
}
