"use client";

// React
import React, { useState, useEffect } from "react";

// Components
import ItHero from "./hero";
import ItAbout from "./about";
import ItService from "./services";
import Itsecurity from "./security";
import Itquality from "./quality";
import Contact from "../contact/page";


export default function It() {
    const [yearsOfExperience, setYearsOfExperience] = useState(0);

    useEffect(() => {
        const startYear = 2011;
        const currentYear = new Date().getFullYear();
        setYearsOfExperience(currentYear - startYear);
    }, []);

    return (
        <div className="min-h-screen">
            <ItHero backgroundImage="/assets/img/bg/it.webp" />

            <ItAbout yearsOfExperience={yearsOfExperience} imageSrc="/assets/img/about/it_about.webp" />

            <ItService backgroundImage="/assets/img/bg/bg_services.webp" />

            <Itsecurity />

            <Itquality />

            <Contact />
        </div>
    );
}