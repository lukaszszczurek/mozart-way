import { useEffect } from 'react';
import ScrollProgress from '../components/mastermode-page/ScrollProgress';
import Nav from '../components/mastermode-page/Nav';
import Hero from '../components/mastermode-page/Hero';
import TrustedBy from '../components/mastermode-page/TrustedBy';
import Ticker from '../components/mastermode-page/Ticker';
import Problem from '../components/mastermode-page/Problem';
import Disqualification from '../components/mastermode-page/Disqualification';
import Solution from '../components/mastermode-page/Solution';
import Features from '../components/mastermode-page/Features';
import Gallery from '../components/mastermode-page/Gallery';
import FounderStory from '../components/mastermode-page/FounderStory';
import Testimonials from '../components/mastermode-page/Testimonials';
import CTA from '../components/mastermode-page/CTA';
import Footer from '../components/mastermode-page/Footer';

export default function Mastermode() {
  useEffect(() => {
    document.title = 'Master Mode — aplikacja edukacyjna dla dzieci 3–7 lat';

    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://mozartway.com/mastermode';
    document.head.appendChild(canonical);

    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content =
      'Master Mode — polska aplikacja dla dzieci 3–7 lat. 50+ gier z matematyki, muzyki, pamięci i logiki. Bez reklam, bez mikropłatności. Zgodna z podstawą programową MEN.';
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
      <Problem />
      <Disqualification />
      <Solution />
      <Features />
      <Gallery />
      <FounderStory />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
