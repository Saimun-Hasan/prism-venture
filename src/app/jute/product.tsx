"use client";

// React
import React, { useRef } from "react";

// Next.js
import Image from "next/image";

// Animation
import { motion, useInView } from "motion/react";


export default function JuteProduct() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <div
            id="products"
            className="w-full bg-[#fffdea] py-24 md:py-32 overflow-hidden"
            ref={ref}
            style={{ padding: "2.5rem" }}
        >
            <div className="flex min-h-screen items-center justify-center text-white my-5">
                <div className="container px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <motion.div className="text-md font-medium mb-6 md:mb-12 text-gray-600">
                            <motion.h2
                                className="text-4xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-12 text-gray-800"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Introducing Our <span className="text-[#89AA5D]">Eco-Friendly Jute Bags</span>
                            </motion.h2>

                            <span className=" text-justify">
                                <motion.p
                                    className="py-3 text-lg"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    Introducing Our Eco-Friendly Jute Bags :
                                </motion.p>

                                <motion.p
                                    className="py-3 text-lg"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    Welcome to our collection of eco-friendly jute bags, where sustainability meets style. Crafted
                                    from 100% natural fibers, our jute bags offer a durable, biodegradable, and compostable
                                    alternative to traditional plastic bags.
                                </motion.p>

                                <motion.div
                                    className="py-3"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    <ul className="space-y-2 text-lg">
                                        <li>
                                            <span className="font-semibold">
                                                100% Natural Fiber:{" "}
                                            </span>
                                            Our jute bags are crafted from 100% natural jute fibers, making them a sustainable and eco-friendly choice.
                                            By choosing our jute bags, you will be contributing to a greener planet.
                                        </li>
                                        <li>
                                            <span className="font-semibold">
                                                Compostable/Biodegradable:{" "}
                                            </span>
                                            These bags are not only reusable but also biodegradable, ensuring they won&apos;t harm the environment.
                                        </li>
                                        <li>
                                            <span className="font-semibold">
                                                Environmentally Friendly:{" "}
                                            </span>
                                            Our eco-conscious values are committed to reducing the carbon footprint.
                                            Jute is a renewable resource, making it one of the most environmentally friendly choices.
                                        </li>
                                        <li>
                                            <span className="font-semibold">
                                                Custom Printing:{" "}
                                            </span>
                                            Make a statement with personalized jute bags. We offer custom printing to help you promote your brand or express its unique style.
                                        </li>
                                        <li>
                                            <span className="font-semibold">
                                                Best Prices:{" "}
                                            </span>
                                            We offer competitive prices without compromising on quality, ensuring the best value for your investment.
                                        </li>
                                        <li>
                                            <span className="font-semibold">
                                                Top Quality:{" "}
                                            </span>
                                            Our jute bags are made with precision and care, meeting the highest standards of quality. We take pride in offering you products that are durable and reliable.
                                        </li>
                                        <li>
                                            <span className="font-semibold">
                                                Prompt Delivery:{" "}
                                            </span>
                                            We understand the importance of timely delivery and ensure that you receive it on time.
                                        </li>
                                    </ul>
                                </motion.div>

                                <motion.p
                                    className="py-3 text-lg"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    Our products are not just about style and utility; they embody a conscientious choice towards a better environment.
                                    By choosing jute, a renewable and biodegradable resource, you can make a significant contribution to reducing plastic waste and supporting a more eco-conscious lifestyle.
                                </motion.p>

                                <motion.p
                                    className="py-3 text-lg font-medium"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                >
                                    Join us in the journey towards a more sustainable future. Choose our jute bags and make a positive impact on the environment.
                                    Get in touch today to place your order and be part of the change!
                                </motion.p>
                            </span>
                        </motion.div>
                        <motion.div
                            className="relative flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src="/assets/img/products/jutebags/05.webp"
                                alt="Jute Bags About"
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