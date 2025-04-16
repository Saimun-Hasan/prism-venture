"use client";

// React
import { useState } from "react";

// Animation
import { motion } from "motion/react";

// Types
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const springConfig = { type: "spring", stiffness: 500, damping: 15, duration: 0.15 };
    const fastTransition = { duration: 0.1 };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        hover: {
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: springConfig
        }
    };

    const iconAnimationVariants = {
        normal: {
            scale: 1,
            rotate: 0,
            transition: springConfig
        },
        hover: {
            scale: 1.15,
            rotate: 5,
            transition: springConfig
        }
    };

    const descriptionVariants = {
        normal: {
            opacity: 0.9,
            transition: fastTransition
        },
        hover: {
            opacity: 1,
            transition: fastTransition
        }
    };

    return (
        <motion.div
            className="bg-[#fff7a6] rounded-xl p-6 shadow-lg h-full flex flex-col overflow-hidden relative"
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
            transition={{
                duration: 0.5,
                delay: index * 0.1
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.div
                className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-blue-50 opacity-25"
                animate={{
                    scale: isHovered ? 1.2 : 1,
                    opacity: isHovered ? 0.4 : 0.25
                }}
                transition={fastTransition}
            />

            <div className="mb-6 relative z-10">
                <motion.div
                    className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"
                    animate={{
                        backgroundColor: isHovered ? "#006ef7" : "#EBF5FF",
                        color: isHovered ? "#ffffff" : "#006ef7"
                    }}
                    transition={fastTransition}
                >
                    <motion.div
                        variants={iconAnimationVariants}
                    >
                        <Icon size={24} />
                    </motion.div>
                </motion.div>
            </div>

            <motion.h3
                className="text-2xl font-bold mb-3 text-gray-800 relative z-10 italic service-title"
                animate={{
                    x: isHovered ? 5 : 0,
                }}
                transition={springConfig}
            >
                {title}
            </motion.h3>

            <motion.p
                className="text-gray-600 flex-grow relative z-10 font-normal"
                variants={descriptionVariants}
            >
                {description}
            </motion.p>

            {isHovered && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={fastTransition}
                >
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={fastTransition}
                    />
                </motion.div>
            )}
        </motion.div>
    );
}