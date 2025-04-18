/* "use client";

// React
import React, { useRef, useState } from "react";

// Animation
import { motion, useInView, AnimatePresence } from "motion/react";

// UI Components
import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card";



export default function JuteProduct() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };


    const defaultBg = "/assets/img/bg/products/jute_rope.webp";
    const [bgImage, setBgImage] = useState<string>(defaultBg);

    return (
        <div
            id="products"
            ref={ref}
            className="w-full bg-[#fffdea] py-24 md:py-32 overflow-hidden"
            style={{
                position: 'relative',
                padding: "2.5rem"
            }}
        >
            <AnimatePresence>
                <motion.div
                    key={bgImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                        zIndex: 0
                    }}
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-[#0000009e] opacity-85" style={{ zIndex: 1 }} />

            <div className="flex min-h-screen items-center justify-center text-white">
                <div className="container mx-auto px-4 md:px-8 relative text-justify">
                    <motion.div
                        className="mb-16 md:mb-24 text-center max-w-3xl mx-auto z-10 relative"
                        variants={titleVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-12">
                            <motion.span
                                className="text-white"
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Your Eco-Friendly Essentials
                            </motion.span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="h-full"
                        >
                            <Card
                                className="overflow-visible relative transition duration-300 ease-in-out cursor-pointer bg-[#1d1d1d] px-2 py-5 z-10 flex flex-col h-full border-none"
                                onMouseEnter={() => {
                                    setBgImage('/assets/img/bg/products/jute_rope.webp');
                                }}
                                onMouseLeave={() => {
                                    setBgImage(defaultBg);
                                }}
                            >
                                <CardContent className="relative w-full flex-grow">
                                    <CardTitle className="text-2xl uppercase tracking-widest text-white font-bold">
                                        Jute Rope
                                    </CardTitle>
                                    <motion.div
                                        className="py-3 text-lg text-white overflow-auto"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <p>
                                            Discover the perfect blend of strength and sustainability with our jute rope. Crafted from renewable jute fibers, this rope offers reliable durability for various uses – from DIY projects to packaging.
                                            Its natural charm and soft texture add elegance to any task. Plus, as a biodegradable material, it&apos;s a conscious choice for both function and eco-friendliness.
                                            Elevate your projects with our eco-luxury jute rope, embodying style, strength, and a greener future.
                                        </p>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="h-full"
                        >
                            <Card
                                className="overflow-visible relative transition duration-300 ease-in-out cursor-pointer bg-[#1d1d1d] px-2 py-5 z-10 flex flex-col h-full border-none"
                                onMouseEnter={() => {
                                    setBgImage('/assets/img/bg/products/jute_fabrics.webp');
                                }}
                                onMouseLeave={() => {
                                    setBgImage(defaultBg);
                                }}
                            >
                                <CardContent className="relative w-full flex-grow">
                                    <CardTitle className="text-2xl uppercase tracking-widest text-white font-bold">
                                        Jute Fabrics
                                    </CardTitle>
                                    <motion.div
                                        className="py-3 text-lg text-white overflow-auto"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <p>
                                            Experience nature&apos;s elegance with our exclusive jute textiles. Woven from lustrous jute fibers, these fabrics blend rustic charm with eco-friendliness.
                                            Perfect for fashion, decor, and crafts, jute fabrics offer durability and breathability, ensuring lasting comfort.
                                            Their biodegradability adds to their allure, making them an eco-conscious choice. From chic apparel to sophisticated upholstery, jute fabrics add sustainable luxury to any space.
                                            Embrace eco-luxury with these natural textiles, making a positive impact on the planet while enjoying timeless beauty.
                                        </p>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="h-full"
                        >
                            <Card
                                className="overflow-visible relative transition duration-300 ease-in-out cursor-pointer bg-[#1d1d1d] px-2 py-5 z-10 flex flex-col h-full border-none"
                                onMouseEnter={() => {
                                    setBgImage('/assets/img/bg/products/jute_bags.webp');
                                }}
                                onMouseLeave={() => {
                                    setBgImage(defaultBg);
                                }}
                            >
                                <CardContent className="relative w-full flex-grow">
                                    <CardTitle className="text-2xl uppercase tracking-widest text-white font-bold">
                                        Jute Bags
                                    </CardTitle>
                                    <motion.div
                                        className="py-3 text-lg text-white overflow-auto"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <p>
                                            Elevate your fashion with our eco-chic jute bags. Crafted from natural jute fibers, these bags seamlessly blend style and sustainability.
                                            Sturdy for shopping or daily use, they radiate rustic charm, complementing various outfits.
                                            Durable handles ensure comfortable carrying, while the spacious interior accommodates essentials.
                                            Biodegradable and guilt-free, our bags make a positive impact on the planet.
                                            Embrace eco-luxury and timeless fashion with these conscious accessories.
                                        </p>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="h-full"
                        >
                            <Card
                                className="overflow-visible relative transition duration-300 ease-in-out cursor-pointer bg-[#1d1d1d] px-2 py-5 z-10 flex flex-col h-full border-none"
                                onMouseEnter={() => {
                                    setBgImage('/assets/img/bg/products/jute_others.webp');
                                }}
                                onMouseLeave={() => {
                                    setBgImage(defaultBg);
                                }}
                            >
                                <CardContent className="relative w-full flex-grow">
                                    <CardTitle className="text-2xl uppercase tracking-widest text-white font-bold">
                                        Others
                                    </CardTitle>
                                    <motion.div
                                        className="py-3 text-lg text-white overflow-auto"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <p>
                                            Discover the pinnacle of sustainable style in our exquisite jute products. Crafted from resilient jute fibers,
                                            these creations embody natural beauty and functionality. From bags to accessories, textiles to decor, our range offers versatile options.
                                            Jute&apos;s charm and biodegradability make it ideal for conscious consumers seeking eco-luxury and style. Whether making a statement, enhancing decor, or unleashing creativity,
                                            our jute products promise endless possibilities. Embrace nature&apos;s finest fibers and a greener lifestyle with these timeless, sustainable pieces that positively impact the planet.
                                        </p>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
} */


"use client";

// React
import React, { useRef } from "react";

// Next.js
import Image from "next/image";

// Animation
import { motion, useInView } from "motion/react";


export default function JuteProduct() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

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