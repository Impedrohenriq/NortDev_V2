import { Contact } from '../sections/Contact';
import { Hero } from '../sections/Hero';
import { HomeOverview } from '../components/HomeOverview';

export function HomePage() {
  return (
    <>
      <Hero />
      <HomeOverview />
      <Contact />
    </>
  );
}
