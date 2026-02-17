import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ProjectsPage from './pages/ProjectsPage';
import './App.css';

const Home = () => (
  <main className="relative z-10">
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Pricing />
    <FAQ />
    <Contact />
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
      <div className="min-h-screen bg-[#011614] text-[#F2F0E4] selection:bg-[#D4AF37] selection:text-[#011614] font-body relative overflow-hidden">
        <ParticleBackground />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

        <footer className="relative z-20 py-20 px-6 lg:px-24 border-t border-white/5 bg-[#011614]/40">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
              <div className="flex items-center gap-4">
                <Link to="/">
                  <img src="/logo.jpeg" alt="BrandUp" className="h-14 w-14 rounded-xl shadow-2xl" />
                </Link>
                <span className="text-2xl font-heading font-bold tracking-tighter italic">Brand<span className="text-[#D4AF37]">Up</span></span>
              </div>
              
              <div className="flex justify-center gap-8 text-2xl">
                <a href="#" className="hover:text-[#D4AF37] transition-all hover:scale-125 transform"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-[#D4AF37] transition-all hover:scale-125 transform"><i className="fab fa-tiktok"></i></a>
                <a href="#" className="hover:text-[#D4AF37] transition-all hover:scale-125 transform"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="hover:text-[#D4AF37] transition-all hover:scale-125 transform"><i className="fab fa-facebook"></i></a>
              </div>

              <div className="md:text-right font-medium opacity-60">
                 {i18n.language === 'ar' ? 'تم تطوير هذا الموقع بواسطة' : 'Developed by'} <a href="https://ahmedsingap.com/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] font-bold hover:underline">أحمد سنجاب</a>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 text-sm">
              <p>© {new Date().getFullYear()} BrandUp Agency. All rights reserved.</p>
              <div className="flex gap-8">
                 <Link to="/privacy" className="hover:text-white transition-colors">{i18n.language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
                 <Link to="/terms" className="hover:text-white transition-colors">{i18n.language === 'ar' ? 'الشروط والأحكام' : 'Terms of Service'}</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;