"use client";

// React
import { useState } from "react";

// Animation
import { motion, AnimatePresence } from "motion/react";

// UI Components
import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";

// Next.js
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    const defaultBg = "/assets/img/homepage/clothing.webp";
    const [bgImage, setBgImage] = useState<string>(defaultBg);

    const cardData = [
        {
            title: "Apparel",
            img: "/assets/img/homepage/clothing.webp",
            link: "/apparel"
        },
        {
            title: "Jute",
            img: "/assets/img/homepage/eco.webp",
            link: "/jute"
        },
        {
            title: "IT",
            img: "/assets/img/homepage/it.webp",
            link: "/it"
        },
        {
            title: "Contact Us",
            img: "/assets/img/homepage/contact.webp",
            link: "/contact"
        },
    ];

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center">
            <AnimatePresence>
                <motion.div
                    key={bgImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 w-full h-full z-0"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0  z-0"
                />
            </AnimatePresence>

            <div className="container relative z-10 flex flex-col items-center justify-center gap-12 px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex w-full items-center justify-center p-4 rounded-lg backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
                >
                    <div className="text-center">
                        <h1 className="text-5xl font-extrabold tracking-tight text-[#fff7a6] sm:text-[5rem]">
                            <Image
                                src={'/prism-bd.webp'}
                                alt={"prism Venture logo"}
                                quality={80}
                                priority
                                width={100}
                                height={100}
                                className="transition-transform duration-700 ease-in-out justify-self-center mb-6"
                            />
                            Prism Venture
                        </h1>
                        <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
                            Excellence in Apparel, Jute Products, and IT Solutions
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
                    {cardData.map(({ title, img, link }, index) => (
                        <Link href={link} key={title}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card
                                    className="overflow-hidden relative p-0 gap-3 hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-[#fff7a6] py-0"
                                    onMouseEnter={() => {
                                        setBgImage(img);
                                    }}
                                    onMouseLeave={() => {
                                        setBgImage(defaultBg);
                                    }}
                                >
                                    <CardContent className="relative h-48 md:h-56 w-100 p-0">
                                        <Image
                                            src={img}
                                            alt={title}
                                            fill
                                            quality={80}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            priority={index === 0}
                                            loading={index === 0 ? undefined : "lazy"}
                                            className="transition-transform duration-700 ease-in-out object-cover"
                                        />
                                    </CardContent>
                                    <CardFooter className="flex items-center justify-center text-lg bg-[#fff7a6] p-2 mb-3">
                                        <CardTitle className="text-xl uppercase tracking-widest text-gray-800 ">
                                            {title}
                                        </CardTitle>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}