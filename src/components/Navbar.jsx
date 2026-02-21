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
    { key: 'about', icon: Info, href: '/about' },
    { key: 'portfolio', icon: LayoutGrid, href: '/projects' },
    { key: 'contact', icon: MessageCircle, href: '/contact' },
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
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 lg:px-24 py-5 glass-nav border-b border-black/5"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 z-10"
        >
          <Link to="/" className="flex items-center gap-4">
            <img src="/logo.jpeg" alt="BrandUp" className="h-10 w-10 rounded-xl border border-black/5" />
            <span className="text-xl font-heading font-black tracking-tighter text-brand-dark">
              Brand<span className="text-brand-accent">Up</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav - Centered Glass Dock */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 bg-black/5 backdrop-blur-md border border-black/5 rounded-full p-1.5 shadow-sm mx-auto">
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
                  className="px-5 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 hover:bg-white text-brand-dark/70 hover:text-brand-dark hover:shadow-sm"
                >
                  <link.icon className="w-3.5 h-3.5 group-hover:text-brand-accent transition-colors" />
                  {t(`nav.${link.key}`)}
                </Link>
              ) : (
                <a
                  href={isHomePage ? link.href : `/${link.href}`}
                  className="px-5 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 hover:bg-white text-brand-dark/70 hover:text-brand-dark hover:shadow-sm"
                >
                  <link.icon className="w-3.5 h-3.5 group-hover:text-brand-accent transition-colors" />
                  {t(`nav.${link.key}`)}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right Side Tools */}
        <div className="flex items-center gap-4 z-10">
          {/* Language Selector (Professional Toggle) */}
          <div className="relative hidden md:block" ref={langRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="h-10 px-4 rounded-xl bg-black/5 border border-black/5 flex items-center gap-2.5 hover:bg-black/10 transition-all text-[11px] font-black uppercase tracking-widest text-brand-dark group"
            >
              <Globe className="w-4 h-4 text-brand-accent group-hover:rotate-12 transition-transform" />
              <span>{currentLang.label}</span>
              <ChevronDown className={cn("w-3.5 h-3.5 opacity-50 transition-transform duration-300", isLangOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full mt-2 right-0 w-44 bg-white/95 backdrop-blur-2xl rounded-2xl border border-black/5 shadow-2xl overflow-hidden p-1.5"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLanguage(l.code)}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl text-right text-[11px] font-bold transition-all flex items-center justify-between group",
                        i18n.language === l.code 
                          ? "bg-brand-accent/10 text-brand-dark" 
                          : "text-brand-dark/60 hover:bg-black/5 hover:text-brand-dark"
                      )}
                    >
                      <span className={cn("w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 transition-opacity", i18n.language === l.code && "opacity-100")} />
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/contact"
            className="hidden lg:flex btn-premium !h-10 !px-6 !rounded-xl items-center gap-2 text-[11px] group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {t('nav.contact')}
            </span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center border border-black/5 text-brand-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="lg:hidden glass-nav fixed inset-x-6 top-24 rounded-3xl border border-black/5 overflow-hidden shadow-xl p-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link 
                    key={link.key} 
                    to={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-heading font-black flex items-center gap-4 text-brand-dark hover:text-brand-accent transition-colors"
                  >
                    <link.icon className="w-7 h-7 text-brand-accent" />
                    {t(`nav.${link.key}`)}
                  </Link>
                ) : (
                  <a 
                    key={link.key} 
                    href={isHomePage ? link.href : `/${link.href}`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-heading font-black flex items-center gap-4 text-brand-dark hover:text-brand-accent transition-colors"
                  >
                    <link.icon className="w-7 h-7 text-brand-accent" />
                    {t(`nav.${link.key}`)}
                  </a>
                )
              ))}
              
              <div className="pt-6 border-t border-black/5">
                 <div className="grid grid-cols-2 gap-3">
                   {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLanguage(l.code)}
                      className={cn(
                        "py-4 rounded-2xl border border-black/5 text-sm font-black transition-all",
                        i18n.language === l.code ? "bg-brand-primary text-white shadow-lg" : "bg-black/5 text-brand-dark/40 hover:bg-black/10"
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
