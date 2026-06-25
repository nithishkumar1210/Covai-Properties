import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesList from './components/FeaturesList';
import LegacyStats from './components/LegacyStats';
import HomeProjectsSection from './components/HomeProjectsSection';
import Services from './components/Services';
import SafetyStandards from './components/SafetyStandards';
import OwnerSection from './components/OwnerSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import AboutUsPage from './pages/AboutUsPage';
import GroupPage from './pages/GroupPage';
import ContactPage from './pages/ContactPage';
import { Check } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'services' | 'projects' | 'companies' | 'contact'
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
  };

  // Auto-hide toast alerts
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <>
      {/* Navbar Header */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      <main>
        {currentPage === 'home' && (
          <>
            {/* 6-Slide Automatic Hero Carousel */}
            <Hero
              onOpenQuote={() => setIsQuoteOpen(true)}
              onNavigateToServices={() => setCurrentPage('services')}
            />

            {/* Pricing, Guidance, Dreams features */}
            <FeaturesList />

            {/* Legacy Statement & counters */}
            <div id="about">
              <LegacyStats />
            </div>

            {/* Looping Projects preview grid */}
            <HomeProjectsSection
              onViewMoreProjects={() => setCurrentPage('projects')}
              onOpenQuote={() => setIsQuoteOpen(true)}
            />

            {/* Services preview catalog */}
            <Services
              onNavigateToServices={() => setCurrentPage('services')}
            />

            {/* Safety Standards section */}
            <SafetyStandards />

            {/* Founder Spotlight */}
            <OwnerSection />

            {/* Customer reviews feedback carousel */}
            <Testimonials />
          </>
        )}

        {currentPage === 'about' && (
          <AboutUsPage />
        )}

        {currentPage === 'services' && (
          <ServicesPage onOpenQuote={() => setIsQuoteOpen(true)} />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage onOpenQuote={() => setIsQuoteOpen(true)} />
        )}

        {currentPage === 'companies' && (
          <GroupPage />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer Navigation Index */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Contact Quote Form Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        showToast={showToast}
      />

      {/* Toast Alert */}
      {toastMessage && (
        <div className="toast">
          <Check size={18} />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}

export default App;
