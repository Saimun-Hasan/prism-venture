// React
import React from "react";

// Animation
import { motion } from "motion/react";


interface HeroProps {
    backgroundImage?: string;
}

export default function ApparelHero({ backgroundImage }: HeroProps) {
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 }
        }
    };

    return (
        <div
            id="home"
            className="h-screen w-full relative"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="flex min-h-screen flex-col items-center xl:items-end justify-center text-white">
                <div className="container px-4">
                    <div className="flex flex-col justify-center lg:flex-row">
                        <div className="xl:w-1/2"></div>
                        <div className="xl:w-3/4">
                            <div className="bg-[#000000ad] bg-opacity-70 p-4 md:p-6 rounded-lg">
                                <h1 className="text-[#fff7a6] text-center xl:text-left font-bold text-[40px] sm:text-[54px] md:text-[60px] lg:text-[67px]">
                                    <motion.span
                                        initial="hidden"
                                        animate="visible"
                                        variants={textVariants}
                                    >
                                        {"Prism Venture".split("").map((char, index) => (
                                            <motion.div
                                                key={`${char}-${index}`}
                                                variants={letterVariants}
                                                className="inline-block"
                                            >
                                                {char === " " ? "\u00A0" : char}
                                            </motion.div>
                                        ))}
                                    </motion.span>
                                </h1>
                                <h1 className="text-white text-center xl:text-left text-[31px] sm:text-[41px] md:text-[47px] lg:text-[54px] leading-[38px] sm:leading-[50px] md:leading-[56px] lg:leading-[64px] mt-2">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.5, duration: 0.6 }}
                                    >
                                        Where Professionalism Meets Comfort
                                    </motion.div>
                                </h1>
                                <motion.div
                                    className="h-1 bg-[#fff7a6] mt-3 md:mt-4 rounded-2xl mx-auto xl:mx-0"
                                    initial={{ width: 0 }}
                                    animate={{ width: 100 }}
                                    transition={{ delay: 2, duration: 0.8 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};