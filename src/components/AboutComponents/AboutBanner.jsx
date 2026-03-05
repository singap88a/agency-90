import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutBanner = () => {
    const { t } = useTranslation();
    return (
        <section className="relative h-[25vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://static.vecteezy.com/system/resources/previews/023/649/106/non_2x/about-us-button-web-banner-templates-illustration-free-vector.jpg" 
                    alt="About Us Banner" 
                    className="w-full h-full object-cover object-center"
                />
            </div>
        </section>
    );
};

export default AboutBanner;
