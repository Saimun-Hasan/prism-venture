"use client";

// React
import React, { useRef } from "react";

// Animation
import { motion, useInView } from "motion/react";

// Icons
import {
    Scissors,
    Factory,
    // ShieldCheck,
    // BarChart4,
    ClipboardCheck,
    // Truck,
    // Search,
    Award,
    FolderCode,
    Warehouse
} from "lucide-react";

// Components
import ServiceCard from "../_components/serviceCard";


interface ApparelServiceProps {
    backgroundImage?: string;
}

export default function ApparelService({ backgroundImage }: ApparelServiceProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

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
            title: "Developments, samples & production",
            description: "From concept to creation, we bring your fashion ideas to life with expert product development, crafting captivating salesman samples, and ensuring flawless production."
        },
        {
            icon: Factory,
            title: "Identifying the correct factory",
            description: "Identifying the right factory based on each enquiry/order for quality, quantity, timely delivery."
        },
        /* {
            icon: ShieldCheck,
            title: "Quality Control\n at Every Step",
            description: "Sampling & monitoring from 1st proto till TOP/shipping sample."
        } */
        {
            icon: FolderCode,
            title: "CAD",
            description: "Computer Aided Design (CAD) is an essential tool for pattern making from samples to production. We offer in-house CAD for pattern making, grading, marker making optimizing fabric consumption.  Geometry drivers can make an infinite number of changes to the shapes and size of the pattern per customer fit/styling comments."
        },
        {
            icon: ClipboardCheck,
            title: "Mastering\n production",
            description: "Total merchandising solutions for streamlined success from ideation to delivery, we optimize the process for seamless efficiency. Providing guidance and scheduling to ensure quality and timely delivery."
        },
        {
            icon: Award,
            title: "Quality control\n & inspection",
            description: "Our team monitors every step of the production starting from trial cutting to shipment. We do in-line & final inspection of merchandise as per required AQL and inspection by any International reputed 3rd party e.g. SGS/BV/Hohenstein is welcome."
        },
        {
            icon: Warehouse,
            title: "Commercial & \n logistics",
            description: "Our expert team follows up on every step from cargo booking to delivery at the destination port, along with all related documentation to expedite cargo clearance."
        },
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
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-12">
                            <motion.span
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                From Vision to Reality
                            </motion.span>
                            {' '}
                            <motion.span
                                className="text-[#006ef7]"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                Unraveling Our Services
                            </motion.span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
