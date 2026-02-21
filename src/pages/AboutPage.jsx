import React, { useEffect } from 'react';
import AboutBanner from '../components/AboutComponents/AboutBanner';
import AboutWhoWeAre from '../components/AboutComponents/AboutWhoWeAre';
import AboutVision from '../components/AboutComponents/AboutVision';
import AboutTeam from '../components/AboutComponents/AboutTeam';
import AboutTestimonials from '../components/AboutComponents/AboutTestimonials';
import { motion } from 'framer-motion';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20 min-h-screen bg-brand-secondary"
        >
            <AboutBanner />
            <AboutWhoWeAre />
            <AboutVision />
            <AboutTeam />
            <AboutTestimonials />
        </motion.main>
    );
};

export default AboutPage;
