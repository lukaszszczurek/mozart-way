import Nav from './components/Nav'
import Hero from './components/Hero'
import LogoBar from './components/LogoBar'
import Problem from './components/Problem'
import Comparison from './components/Comparison'
import Solution from './components/Solution'
import DemoVideo from './components/DemoVideo'
import Features from './components/Features'
import MarqueeBand from './components/MarqueeBand'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function MozartAdsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body dark">
      <Nav />
      <Hero />
      <LogoBar />
      <Problem />
      <Comparison />
      <Solution />
      <DemoVideo />
      <div className="gradient-line" />
      <Features />
      <MarqueeBand />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
