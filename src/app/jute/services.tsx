"use client";

// React
import React, { useRef } from "react";

// Next.js
import Image from "next/image";

// Animation
import { motion, useInView } from "motion/react";


export default function JuteService() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <div
            id="services"
            className="w-full bg-[#fffdea] py-24 md:py-32 overflow-hidden"
            ref={ref}
            style={{ padding: "0rem 1.5rem 0rem 1.5rem" }}
        >
            <div className="flex min-h-screen items-center justify-center text-white">
                <div className="container px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <motion.div
                            className="relative flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src="/assets/img/about/about_eco.webp"
                                alt="About"
                                width={650}
                                height={650}
                                className="rounded-3xl"
                            />
                        </motion.div>
                        <motion.div className="text-md font-medium mb-6 md:mb-12 text-gray-600">
                            <motion.h2
                                className="text-4xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-12 text-gray-800 italic"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Our <span className="text-[#89AA5D]">Services</span>
                            </motion.h2>

                            <motion.p
                                className="py-3 text-3xl"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                We offer our products with:
                            </motion.p>
                            <motion.ul
                                className="text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <li>Custom print and size</li>
                                <li>Small - bulk orders</li>
                                <li>Affordable prices</li>
                                <li>Top Quality</li>
                                <li>On time delivery</li>
                            </motion.ul>
                            <motion.p
                                className="py-3 text-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Our products are not just about style and utility; they embody a conscientious choice towards a better environment.
                                By choosing jute, a renewable and biodegradable resource, you can make a significant contribution to reducing plastic waste and supporting a more eco-conscious lifestyle.
                                Join us in our journey in embracing the future of sustainability and let&apos;s create a cleaner, greener planet together.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};