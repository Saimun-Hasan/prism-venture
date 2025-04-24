"use client";

// React
import React, { useRef } from "react";

// Next.js
import Image from "next/image";

// Animation
import { motion, useInView } from "motion/react";


export default function Itsecurity() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <div
            id="security"
            className="w-full bg-[#fffdea] py-24 md:py-32 overflow-hidden"
            ref={ref}
            style={{ padding: "2.5rem" }}
        >
            <div className="flex min-h-screen items-center justify-center text-white">
                <div className="container px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-justify">
                        <motion.div
                            className="relative flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src={"/assets/img/about/security.webp"}
                                alt="Security"
                                width={450}
                                height={450}
                                className="rounded-3xl"
                            />
                        </motion.div>
                        <motion.div className="flex flex-col items-start justify-center text-md font-medium mb-6 md:mb-12 text-gray-600">
                            <motion.h2
                                className="text-4xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-12 text-gray-800"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-[#006ef7]">Security</span>
                            </motion.h2>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                At Prism Venture, the security and integrity of our clients&apos; data are of paramount importance to us.
                                We have implemented rigorous measures to ensure data protection, which include the following safeguards
                            </motion.p>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Restriction of Output Devices: Our data entry setup strictly prohibits the presence of any output devices other than monitors for the operators,
                                minimizing the risk of unauthorized data extraction.
                            </motion.p>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Direct Server Data Storage: All data entered by operators is directly saved on our secure server, minimizing the likelihood
                                of sensitive information being retained on individual workstations.
                            </motion.p>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Data Loss Prevention: We have implemented a redundant array of independent disks (RAID) controller on the server,
                                ensuring data redundancy and minimizing the chances of data loss.
                            </motion.p>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Surveillance Measures: Our setup is equipped with closed-circuit cameras, providing an additional layer of security oversight.
                            </motion.p>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                At Prism Venture, we uphold a steadfast commitment to safeguarding data and maintaining a secure operational environment, 
                                underscoring our dedication to maintaining the confidentiality and reliability of our clients&apos; information.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};