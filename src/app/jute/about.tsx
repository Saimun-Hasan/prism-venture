"use client";

// React
import React, { useRef } from "react";

// Next.js
import Image from "next/image";

// Animation
import { motion, useInView } from "motion/react";

// Custom Hooks
import useCounter from "../../hooks/useCounter";


interface ApparelAboutProps {
    yearsOfExperience: number;
    imageSrc?: string;
}

export default function JuteAbout({ yearsOfExperience, imageSrc }: ApparelAboutProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });


    const count = useCounter({
        endValue: yearsOfExperience,
        duration: 1000,
        isInView: isInView,
    });

    return (
        <div
            id="about"
            className="w-full bg-[#fffdea] py-24 md:py-32 overflow-hidden"
            ref={ref}
            style={{ padding: "2.5rem" }}
        >
            <div className="flex min-h-screen items-center justify-center text-white">
                <div className="container px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-justify">
                        <motion.div className="text-md font-medium mb-6 md:mb-12 text-gray-600">
                            <motion.h2
                                className="text-4xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-12 text-gray-800"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                About <span className="text-[#89AA5D]">Prism</span>
                            </motion.h2>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Welcome to our eco-friendly initiative, where we are committed to promoting a greener and more sustainable world.
                                Over the years we have been exporting jute products such as:
                            </motion.p>
                            <motion.ul
                                className="text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <li>Geo Jute Soil Savers</li>
                                <li>Burlaps/Hessian</li>
                                <li>Jute Rope</li>
                                <li>Jute and Canvas Bags</li>
                                <li>Jute Sacks</li>
                                <li>Jute Yarn and Twine</li>
                            </motion.ul>
                        </motion.div>
                        <motion.div
                            className="relative flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src={imageSrc ?? "/fallback.jpg"}
                                alt="About"
                                width={650}
                                height={650}
                                className="rounded-3xl"
                            />
                            <div className="experience-info" style={{ background: '#89aa5d' }}>
                                <div className="experience-number">{count}</div>
                                <div className="experience-text">
                                    YEARS<br />
                                    EXPERIENCE
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};