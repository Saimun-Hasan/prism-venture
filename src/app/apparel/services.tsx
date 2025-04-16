"use client";

// React
import React, { useRef } from "react";

// Animation
import { motion, useInView } from "motion/react";

// Icons
import {
    Scissors,
    Factory,
    ShieldCheck,
    BarChart4,
    ClipboardCheck,
    Truck,
    Search,
    Award
} from "lucide-react";

// Components
import ServiceCard from "../_components/serviceCard";


interface ApparelServiceProps {
    backgroundImage?: string;
}

export default function ApparelService({ backgroundImage }: ApparelServiceProps) {
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

    const services = [
        {
            icon: Scissors,
            title: "Development, samples & production",
            description: "From concept to creation, we bring your fashion ideas to life with expert product development, crafting captivating salesman samples, and ensuring flawless production."
        },
        {
            icon: Factory,
            title: "Identifying the Perfect Factory",
            description: "Identifying the right factory based on each enquiry/order for quality, quantity, timely delivery."
        },
        {
            icon: ShieldCheck,
            title: "Quality Control\n at Every Step",
            description: "Sampling & monitoring from 1st proto till TOP/shipping sample."
        },
        {
            icon: BarChart4,
            title: "Empowering\n Factories",
            description: "Total Merchandising Solutions for Streamlined Success. From ideation to delivery, we optimize the process for seamless efficiency."
        },
        {
            icon: ClipboardCheck,
            title: "Mastering\n Manufacturing",
            description: "Providing guidance/scheduling for implementing effective manufacturing."
        },
        {
            icon: Truck,
            title: "Cutting to\n Shipping",
            description: "Order monitoring starting from trial cutting to shipment."
        },
        {
            icon: Search,
            title: "Precision\n Inspections",
            description: "In-line & final inspection of merchandise as per required AQL."
        },
        {
            icon: Award,
            title: "Quality\n Certified",
            description: "Inspection by any International reputed 3rd party e.g. SGS/BV/Hohenstein is workable."
        }
    ];

    return (
        <div
            id="services"
            ref={ref}
            className="w-full bg-[#fffdea] py-24 md:py-32 overflow-hidden"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                position: 'relative',
                padding: "2.5rem"
            }}
        >
            <div className="absolute inset-0 bg-[#0000009e] opacity-85" />

            <div className="flex min-h-screen items-center justify-center text-white">
                <div className="container mx-auto px-4 md:px-8 relative">
                    <motion.div
                        className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
                        variants={titleVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-12 italic">
                            <motion.span
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                From Vision to Reality
                            </motion.span>
                            {' '}
                            <motion.span
                                className="text-[#006ef7]"
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Unraveling Our Services
                            </motion.span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
