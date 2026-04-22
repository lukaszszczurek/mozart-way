import { useEffect } from 'react';
import ScrollProgress from '../components/education-page/ScrollProgress';
import Nav from '../components/education-page/Nav';
import Hero from '../components/education-page/Hero';
import TrustedBy from '../components/education-page/TrustedBy';
import Ticker from '../components/education-page/Ticker';
import Stats from '../components/education-page/Stats';
import Problem from '../components/education-page/Problem';
import Disqualification from '../components/education-page/Disqualification';
import Solution from '../components/education-page/Solution';
import Features from '../components/education-page/Features';
import Gallery from '../components/education-page/Gallery';
import FounderStory from '../components/education-page/FounderStory';
import Trust from '../components/education-page/Trust';
import Testimonials from '../components/education-page/Testimonials';
import CTA from '../components/education-page/CTA';
import Footer from '../components/education-page/Footer';

export default function Education() {
  useEffect(() => {
    document.title = 'AI dla placówek edukacyjnych — mozartway';

    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://mozartway.com/education';
    document.head.appendChild(canonical);

    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content =
      'System AI dla placówek edukacyjnych — zarządzaj szkołami z jednego miejsca. Automatyzacja, analityka, powiadomienia.';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(canonical);
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="noise-texture">
      <ScrollProgress />
      <Nav />
      <Hero />
      <TrustedBy />
      <Ticker />
      <Stats />
      <Problem />
      <Disqualification />
      <Solution />
      <Features />
      <Gallery />
      <FounderStory />
      <Trust />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
