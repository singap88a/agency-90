import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import ParticleBackground from './components/ParticleBackground';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import './App.css';

const Home = () => (
  <main className="relative z-10">
    <Hero />
    <Stats />
    <About />
    <Services />
    <Portfolio />
    {/* <Pricing /> */}
    <FAQ />
    <CTA />
  </main>
);

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir();
  }, [i18n.language]);

  return (
    <Router>
      <div className="min-h-screen bg-brand-surface text-brand-dark selection:bg-brand-primary/20 selection:text-brand-primary font-body relative overflow-hidden">
        {/* Global Blended Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-surface via-brand-primary/[0.03] to-brand-surface" />
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-brand-primary/[0.05] rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-brand-secondary/[0.05] rounded-full blur-[120px]" />
        </div>
        
        <ParticleBackground />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;