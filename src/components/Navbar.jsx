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
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
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
    setIsMobileLangOpen(false);
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
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 lg:px-24 py-5",
        isHomePage && !isScrolled 
          ? "bg-transparent border-transparent" 
          : "glass-nav border-b border-black/5 shadow-sm"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 z-10"
          >
            <Link to="/" className=" ">
              <img src="/logo.png" alt="agency 90" className=" h-10 w-20  " />
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
                    className={cn(
                      "px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 hover:bg-white/10",
                      isHomePage && !isScrolled ? "text-white" : "text-brand-dark/70 hover:text-brand-dark hover:bg-white hover:shadow-sm"
                    )}
                  >
                    <link.icon className="w-3.5 h-3.5 group-hover:text-brand-primary transition-colors" />
                    {t(`nav.${link.key}`)}
                  </Link>
                ) : (
                  <a
                    href={isHomePage ? link.href : `/${link.href}`}
                    className={cn(
                      "px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 hover:bg-white/10",
                      isHomePage && !isScrolled ? "text-white" : "text-brand-dark/70 hover:text-brand-dark hover:bg-white hover:shadow-sm"
                    )}
                  >
                    <link.icon className="w-3.5 h-3.5 group-hover:text-brand-primary transition-colors" />
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
                className={cn(
                  "h-10 px-4 rounded-xl flex items-center gap-2.5 transition-all text-xs font-bold tracking-wide group border",
                  isHomePage && !isScrolled 
                    ? "bg-white/10 border-white/20 text-white hover:bg-white/20" 
                    : "bg-black/5 border-black/5 text-brand-dark hover:bg-black/10"
                )}
              >
                <Globe className={cn("w-4 h-4 transition-transform group-hover:rotate-12", isHomePage && !isScrolled ? "text-white" : "text-brand-primary")} />
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
                          "w-full px-4 py-2.5 rounded-xl text-right text-xs font-semibold transition-all flex items-center justify-between group",
                          i18n.language === l.code 
                            ? "bg-brand-primary/10 text-brand-dark" 
                            : "text-brand-dark/60 hover:bg-black/5 hover:text-brand-dark"
                        )}
                      >
                        <span className={cn("w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 transition-opacity", i18n.language === l.code && "opacity-100")} />
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/contact"
              className="hidden lg:flex btn-premium !h-10 !px-6 !rounded-xl items-center gap-2 text-xs font-bold group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {t('cta.button')}
              </span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
            </Link>

            {/* Mobile Toggle */}
            <button 
              className={cn(
                "lg:hidden w-10 h-10 rounded-xl flex items-center justify-center border transition-all",
                isHomePage && !isScrolled 
                  ? "bg-white/10 border-white/20 text-white" 
                  : "bg-black/5 border-black/5 text-brand-dark"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar & Backdrop - Moved outside for full-screen fixed positioning */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: i18n.dir() === 'rtl' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: i18n.dir() === 'rtl' ? '-100%' : '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "fixed top-0 bottom-0 z-[1001] w-[300px] h-screen bg-white shadow-2xl lg:hidden flex flex-col pt-8",
                i18n.dir() === 'rtl' ? "left-0" : "right-0"
              )}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-black/5">
                          <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 text-brand-dark"
                >
                  <X className="w-5 h-5" />
                </button>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <img src="/logo.png" alt="agency 90" className="h-8 w-auto" />
                </Link>
    
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 custom-scrollbar">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    link.href.startsWith('/') ? (
                      <Link 
                        key={link.key} 
                        to={link.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-bold flex items-center gap-4 text-brand-dark hover:text-brand-primary transition-colors py-3 border-b border-black/5 last:border-0"
                      >
                        <link.icon className="w-5 h-5 text-brand-primary" />
                        {t(`nav.${link.key}`)}
                      </Link>
                    ) : (
                      <a 
                        key={link.key} 
                        href={isHomePage ? link.href : `/${link.href}`} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-bold flex items-center gap-4 text-brand-dark hover:text-brand-primary transition-colors py-3 border-b border-black/5 last:border-0"
                      >
                        <link.icon className="w-5 h-5 text-brand-primary" />
                        {t(`nav.${link.key}`)}
                      </a>
                    )
                  ))}
                </div>
                
                {/* Mobile Language Selector Dropdown */}
                <div className="mt-2">
                  <p className="text-xs font-black text-brand-dark/30 uppercase tracking-[0.2em] mb-4">
                    {t('nav.select_language') || "Select Language"}
                  </p>
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMobileLangOpen(!isMobileLangOpen);
                      }}
                      className="w-full h-14 px-5 rounded-2xl bg-black/5 border border-black/5 flex items-center justify-between text-brand-dark font-bold"
                    >
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-brand-primary" />
                        <span>{currentLang.label}</span>
                      </div>
                      <ChevronDown className={cn("w-5 h-5 opacity-50 transition-transform duration-300", isMobileLangOpen && "rotate-180")} />
                    </button>
                    
                    <AnimatePresence>
                      {isMobileLangOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 bg-black/5 rounded-2xl overflow-hidden"
                        >
                          {languages.map((l) => (
                            <button
                              key={l.code}
                              onClick={() => changeLanguage(l.code)}
                              className={cn(
                                "w-full px-6 py-4 text-right text-sm font-bold transition-all flex items-center justify-between border-b border-black/5 last:border-0",
                                i18n.language === l.code ? "bg-brand-primary/10 text-brand-primary" : "text-brand-dark/60"
                              )}
                            >
                              <span>{l.label}</span>
                              {i18n.language === l.code && <div className="w-2 h-2 rounded-full bg-brand-primary" />}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <Link 
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 h-14 min-h-[56px] rounded-2xl bg-brand-primary text-white flex items-center justify-center gap-3 font-bold hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('cta.button')}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
