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


export default function Apparel() {
    const [yearsOfExperience, setYearsOfExperience] = useState(0);

    useEffect(() => {
        const startYear = 2011;
        const currentYear = new Date().getFullYear();
        setYearsOfExperience(currentYear - startYear);
    }, []);

    return (
        <div className="min-h-screen">
            <ApparelHero backgroundImage="/assets/img/homepage/clothing.webp" />

            <ApparelAbout yearsOfExperience={yearsOfExperience} imageSrc="/assets/img/about/about.webp" />

            <ApparelService backgroundImage="/assets/img/bg/experience.webp" />

            <ApparelProduct />

            <ApparelGallery />

            <Contact />
        </div>
    );
}