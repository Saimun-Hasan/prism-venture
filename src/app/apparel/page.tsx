"use client";

// React
import React, { useState, useEffect } from "react";

// Components
import ApparelHero from "./hero";
import ApparelAbout from "./about";
import ApparelService from "./services";
import ApparelProduct from "./product";
import ApparelGallery from "./gallery";
import Contact from "../contact/page";

//Lucide Icon
import { ArrowUp } from "lucide-react";


export default function Apparel() {
    const [yearsOfExperience, setYearsOfExperience] = useState(0);
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        const startYear = 2011;
        const currentYear = new Date().getFullYear();
        setYearsOfExperience(currentYear - startYear);

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen">
            <ApparelHero backgroundImage="/assets/img/homepage/clothing.webp" />

            <ApparelAbout yearsOfExperience={yearsOfExperience} imageSrc="/assets/img/about/about.webp" />

            <ApparelService backgroundImage="/assets/img/bg/experience.webp" />

            <ApparelProduct />

            <ApparelGallery />

            <Contact />

            {showGoToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 z-50 bg-[#2b7fff] text-black p-4 rounded-full w-[50px] shadow-lg hover:bg-[#0065ff] transition"
                    aria-label="Go to top"
                >
                    <ArrowUp size={20} className="text-white justify-self-center"/>
                </button>
            )}
        </div>
    );
}