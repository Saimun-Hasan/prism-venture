"use client";

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
                <div className="container mx-auto px-4 md:px-8 relative">
                    <motion.div
                        className="mb-16 md:mb-24 text-center max-w-3xl mx-auto z-10 relative"
                        variants={titleVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-12 italic">
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
                                    <CardTitle className="text-2xl uppercase tracking-widest text-white italic font-bold">
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
                                    <CardTitle className="text-2xl uppercase tracking-widest text-white italic font-bold">
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
                                    <CardTitle className="text-2xl uppercase tracking-widest text-white italic font-bold">
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
                                    <CardTitle className="text-2xl uppercase tracking-widest text-white italic font-bold">
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
}