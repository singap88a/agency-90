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
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir();
  }, [i18n.language]);

  return (
    <Router>
      <div className="min-h-screen bg-brand-secondary text-brand-dark selection:bg-brand-primary/20 selection:text-brand-primary font-body relative overflow-hidden">
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

        <footer className="relative z-20 py-20 px-6 lg:px-24 border-t border-black/5 bg-black/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
              <div className="flex items-center gap-4">
                <Link to="/">
                  <img src="/logo.jpeg" alt="BrandUp" className="h-14 w-14 rounded-xl shadow-2xl" />
                </Link>
                <span className="text-2xl font-heading font-bold tracking-tighter italic text-brand-dark">Brand<span className="text-brand-accent">Up</span></span>
              </div>
              
              <div className="flex justify-center gap-8 text-2xl">
                <a href="#" className="hover:text-brand-accent transition-all hover:scale-125 transform"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-brand-accent transition-all hover:scale-125 transform"><i className="fab fa-tiktok"></i></a>
                <a href="#" className="hover:text-brand-accent transition-all hover:scale-125 transform"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="hover:text-brand-accent transition-all hover:scale-125 transform"><i className="fab fa-facebook"></i></a>
              </div>

              <div className="md:text-right font-medium opacity-60 text-brand-dark">
                 {i18n.language === 'ar' ? 'تم تطوير هذا الموقع بواسطة' : 'Developed by'} <a href="https://ahmedsingap.com/" target="_blank" rel="noopener noreferrer" className="text-brand-accent font-bold hover:underline">أحمد سنجاب</a>
              </div>
            </div>
            
            <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 text-sm italic text-brand-dark">
              <p>© {new Date().getFullYear()} BrandUp Agency. All rights reserved.</p>
              <div className="flex gap-8">
                 <Link to="/privacy" className="hover:text-brand-primary transition-colors">{i18n.language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
                 <Link to="/terms" className="hover:text-brand-primary transition-colors">{i18n.language === 'ar' ? 'الشروط والأحكام' : 'Terms of Service'}</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;