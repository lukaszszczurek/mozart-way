import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Benefits } from './components/Benefits';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none"
      >
        Przejdź do treści
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Testimonials />
        <Services />
        <CaseStudies />
        <Benefits />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
