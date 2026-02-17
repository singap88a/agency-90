import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, Home, Briefcase, Info, DollarSign, MessageCircle, ChevronDown, LayoutGrid } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { key: 'home', icon: Home, href: '/' },
    { key: 'services', icon: Briefcase, href: '#services' },
    { key: 'about', icon: Info, href: '#about' },
    { key: 'portfolio', icon: LayoutGrid, href: '/projects' },
  ];

  const languages = [
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'nl', label: 'Nederlands' },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 lg:px-24",
      isScrolled ? "py-4 glass-nav" : "py-10 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 z-10"
        >
          <Link to="/" className="flex items-center gap-4">
            <img src="/logo.jpeg" alt="BrandUp" className="h-12 w-12 rounded-xl border border-white/10" />
            <span className="text-2xl font-heading font-black tracking-tighter text-white">
              Brand<span className="text-[#D4AF37]">Up</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav - Centered Glass Dock */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 bg-[#011614]/80 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-2xl ring-1 ring-white/5 mx-auto">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.key}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.href.startsWith('/') ? (
                <Link
                  to={link.href}
                  className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 hover:bg-white/10 text-white/70 hover:text-white group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <link.icon className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" />
                    {t(`nav.${link.key}`)}
                  </span>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ) : (
                <a
                  href={isHomePage ? link.href : `/${link.href}`}
                  className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 hover:bg-white/10 text-white/70 hover:text-white group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <link.icon className="w-4 h-4 group-hover:text-[#D4AF37] transition-colors" />
                    {t(`nav.${link.key}`)}
                  </span>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right Side Tools */}
        <div className="flex items-center gap-4 z-10">
          {/* Language Selector (Refined Custom Dropdown) */}
          <div className="relative hidden md:block" ref={langRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-all text-xs font-black uppercase tracking-tighter"
            >
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              {currentLang.code.toUpperCase()}
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isLangOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full mt-2 right-0 w-48 glass-nav rounded-2xl border border-white/10 overflow-hidden shadow-2xl py-2"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLanguage(l.code)}
                      className={cn(
                        "w-full px-6 py-3 text-right text-xs font-bold transition-all hover:bg-white/5",
                        i18n.language === l.code ? "text-[#D4AF37] bg-white/5" : "text-white/60 hover:text-white"
                      )}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a 
            href="#contact"
            className="hidden lg:block btn-premium !py-3 !px-8 text-xs transform hover:rotate-1"
          >
            {t('nav.contact')}
          </a>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden glass-nav fixed inset-x-6 top-24 rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link 
                    key={link.key} 
                    to={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-heading font-black flex items-center gap-4 hover:text-[#D4AF37] transition-colors"
                  >
                    <link.icon className="w-7 h-7 text-[#D4AF37]" />
                    {t(`nav.${link.key}`)}
                  </Link>
                ) : (
                  <a 
                    key={link.key} 
                    href={isHomePage ? link.href : `/${link.href}`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-heading font-black flex items-center gap-4 hover:text-[#D4AF37] transition-colors"
                  >
                    <link.icon className="w-7 h-7 text-[#D4AF37]" />
                    {t(`nav.${link.key}`)}
                  </a>
                )
              ))}
              
              <div className="pt-6 border-t border-white/10">
                 <div className="grid grid-cols-2 gap-3">
                   {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLanguage(l.code)}
                      className={cn(
                        "py-4 rounded-2xl border border-white/10 text-sm font-black",
                        i18n.language === l.code ? "bg-[#D4AF37] text-[#011614] shadow-lg" : "bg-white/5 text-white/40"
                      )}
                    >
                      {l.label}
                    </button>
                  ))}
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
