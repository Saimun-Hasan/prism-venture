"use client";

// React
import React, { useRef } from "react";

// Animation
import { motion, useInView } from "motion/react";

// Icons
import {
    FileText,
    ScanLine,
    Database,
    ClipboardList,
    Plane,
    BarChart,
    UserCheck
} from "lucide-react";

// Components
import ServiceCard from "../_components/serviceCard";


interface ItServiceProps {
    backgroundImage?: string;
}

export default function ItService({ backgroundImage }: ItServiceProps) {
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
            icon: FileText,
            title: "Precise Volume Data Entry (Handwritten / Printed)",
            description: "We adeptly handle both handwritten and printed data entry tasks with meticulous accuracy, ensuring that even voluminous information is captured flawlessly into digital formats"
        },
        {
            icon: ScanLine,
            title: "Scanning and OCR Cleanup",
            description: "Our advanced scanning solutions combined with Optical Character Recognition (OCR) technology guarantee a streamlined transition from physical documents to digital data, with an additional focus on refining the output for enhanced readability and utility."
        },
        {
            icon: Database,
            title: "Efficient Data Sorting",
            description: "Capitalizing on our proficiency in data management, we expertly organize and categorize datasets, allowing for efficient retrieval and analysis, thereby empowering informed decision-making."
        },
        {
            icon: ClipboardList,
            title: "Thorough Surveys and Questionnaires Handling",
            description: "Seamlessly managing surveys and questionnaires, we ensure that the data collection process is conducted seamlessly, preserving the integrity of responses and facilitating insightful analysis."
        },
        {
            icon: Plane,
            title: "Accurate Airway Bill Entries",
            description: "Leveraging our expertise in logistics and data processing, we provide meticulous airway bill data entry services, contributing to streamlined cargo tracking and management."
        },
        {
            icon: BarChart,
            title: "Insightful Market Research Tabulation",
            description: "Our adeptness in market research extends to comprehensive tabulation services, enabling clients to derive meaningful insights from complex research data, thus facilitating strategic business planning."
        },
        {
            icon: UserCheck,
            title: "Guest / Customer Command Card Management",
            description: "With a keen eye on enhancing guest and customer experiences, we proficiently handle command card data, aiding businesses in understanding preferences and tailoring services accordingly."
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
                padding: "4rem 1.5rem 4rem 1.5rem"
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
                                Our
                            </motion.span>
                            {' '}
                            <motion.span
                                className="text-[#006ef7]"
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Services
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
