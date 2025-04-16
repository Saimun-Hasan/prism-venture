"use client";

// React
import React, { useRef } from "react";

// Next.js
import Image from "next/image";

// Animation
import { motion, useInView } from "motion/react";


export default function Itquality() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <div
            id="quality_control"
            className="w-full bg-white py-24 md:py-32 overflow-hidden"
            ref={ref}
            style={{ padding: "2.5rem" }}
        >
            <div className="flex min-h-screen items-center justify-center text-white">
                <div className="container px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <motion.div className="flex flex-col items-start justify-center text-md font-medium mb-6 md:mb-12 text-gray-600">
                            <motion.h2
                                className="text-4xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-12 text-gray-800 italic"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            > 
                            Quality <span className="text-[#006ef7]">Control</span>
                            </motion.h2>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Our operational methodology at Prism Venture is characterized by a rigorous and meticulous approach, ensuring the accuracy and 
                                integrity of every facet of data processing. The following sequential steps outline our comprehensive process
                            </motion.p>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Batch Segmentation and Instruction: The task at hand is systematically divided into manageable batches, each accompanied by a &quot;Keying Specification Instruction Sheet.&quot; This preliminary step sets the foundation for precision and consistency.
                            </motion.p>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Dual Data Typing: Two skilled data typists independently input information into separate files, yielding distinct outputs designated as A and B. 
                                This dual-input strategy enhances data reliability.
                            </motion.p>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Comparative Verification: Employing specialized software, the outputs A and B undergo a meticulous electronic comparison. 
                                The software halts its process upon detecting any discrepancies between the two files. 
                                This mechanism empowers operators to promptly address and rectify errors, as overseen by a vigilant pair of operators. 
                                The outcome of this comparison results in the creation of files C and D.
                            </motion.p>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Consolidation Phase: The files C and D, generated through the comparative process, undergo an additional layer of electronic comparison. 
                                This iterative approach contributes to the creation of a consolidated and harmonized file.
                            </motion.p>

                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Accuracy Audit: A comprehensive audit is conducted on the resultant text file, denoted as E. 
                                This meticulous evaluation ensures that the data entry work attains the mandated accuracy level of 99.995%, thereby upholding the highest standards of quality.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            className="relative flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src={"/assets/img/about/quality_control.webp"}
                                alt="About"
                                width={650}
                                height={650}
                                className="rounded-3xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};