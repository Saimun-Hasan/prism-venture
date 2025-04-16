"use client";

// React
import React, { useState, useEffect } from "react";

// Components
import JuteHero from "./hero";
import JuteAbout from "./about";
import JuteService from "./services";
import JuteProduct from "./product";
import Contact from "../contact/page";


export default function Jute() {
    const [yearsOfExperience, setYearsOfExperience] = useState(0);

    useEffect(() => {
        const startYear = 2011;
        const currentYear = new Date().getFullYear();
        setYearsOfExperience(currentYear - startYear);
    }, []);

    return (
        <div className="min-h-screen">
            <JuteHero backgroundImage="/assets/img/bg/bg-eco.webp" />

            <JuteAbout yearsOfExperience={yearsOfExperience} imageSrc="/assets/img/about/about_eco.webp" />

            <JuteService />

            <JuteProduct />

            <Contact />
        </div>
    );
}