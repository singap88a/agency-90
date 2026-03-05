import React, { useEffect } from 'react';
import AboutBanner from '../components/AboutComponents/AboutBanner';
import AboutWhoWeAre from '../components/AboutComponents/AboutWhoWeAre';
import AboutVision from '../components/AboutComponents/AboutVision';
import AboutTeam from '../components/AboutComponents/AboutTeam';
import AboutTestimonials from '../components/AboutComponents/AboutTestimonials';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main 
            className="pt-20 min-h-screen bg-brand-surface"
        >
            <AboutBanner />
            <AboutWhoWeAre />
            <AboutVision />
            <AboutTeam />
            <AboutTestimonials />
        </main>
    );
};

export default AboutPage;
