import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PainSection from '../components/PainSection'
import OutcomeSection from '../components/OutcomeSection'
import ProcessSection from '../components/ProcessSection'
import FeaturesGrid from '../components/FeaturesGrid'
import PricingSection from '../components/PricingSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        {/* 1. Above the Fold - Hero */}
        <Hero />

        {/* Divider */}
        <div className="section-container">
          <div className="divider-glow" role="separator" aria-hidden="true" />
        </div>

        {/* 2. Current Pain - The Before */}
        <PainSection />

        {/* Divider */}
        <div className="section-container">
          <div className="divider-glow" role="separator" aria-hidden="true" />
        </div>

        {/* 3. Desired Outcome - The After */}
        <OutcomeSection />

        {/* Divider */}
        <div className="section-container">
          <div className="divider-glow" role="separator" aria-hidden="true" />
        </div>

        {/* 4. Process Presentation - The Bridge */}
        <ProcessSection />

        {/* Divider */}
        <div className="section-container">
          <div className="divider-glow" role="separator" aria-hidden="true" />
        </div>

        {/* 5. Features Grid */}
        <FeaturesGrid />

        {/* Divider */}
        <div className="section-container">
          <div className="divider-glow" role="separator" aria-hidden="true" />
        </div>

        {/* 6. Pricing */}
        <PricingSection />

        {/* Divider */}
        <div className="section-container">
          <div className="divider-glow" role="separator" aria-hidden="true" />
        </div>

        {/* 7. FAQ */}
        <FAQSection />
      </main>

      {/* Footer + Contact */}
      <Footer />
    </div>
  )
}
