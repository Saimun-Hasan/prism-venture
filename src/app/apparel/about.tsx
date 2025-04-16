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

export default function ApparelAbout({ yearsOfExperience, imageSrc }: ApparelAboutProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });


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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <motion.div className="text-md font-medium mb-6 md:mb-12 text-gray-600">
                            <motion.h2
                                className="text-4xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-12 text-gray-800 italic"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                About <span className="text-[#006ef7]">Prism</span>
                            </motion.h2>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Welcome to Prism Venture – a buying house with a vision that aims to change the
                                perspective of your garment sourcing experience.
                            </motion.p>
                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Embarking on a global quest, we curate the finest shell fabrics and tiniest
                                details, sourced from China, Taiwan, Thailand, Malaysia, India, and beyond, all
                                tailored to your needs.
                            </motion.p>
                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Our team is built with experienced merchandisers and a hardworking QC team, who
                                work to maintain the required AQL and operate cohesively to satisfy our
                                customer&apos;s needs to execute orders of all sizes.
                            </motion.p>
                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Alongside providing the best products, we also maintain committed business
                                partnerships. We have built a foundation of reliable sourcing of fashion
                                garments from Bangladesh, that too at great value.
                            </motion.p>
                            <motion.p
                                className="text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Join us in this journey to experience a partnership where professionalism meets
                                comfort!
                            </motion.p>
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
                            <div className="experience-info italic">
                                <div className="experience-number">{count}</div>
                                <div className="experience-text">
                                    YEARS<br />
                                    EXPERIENCE<br />
                                    WORKING
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};