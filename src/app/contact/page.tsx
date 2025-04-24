"use client";

// React
import React, { useRef } from "react";

// Animation
import { motion, useInView } from "framer-motion";

// Next.js
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import { PhoneCall, Mail } from "lucide-react";


export default function Contact() {
    const pathname = usePathname();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const isJutepage = pathname === "/jute"

    const backgroundImage = "/assets/img/bg/contact.webp"

    return (
        <footer
            id="contact"
            className="w-full bg-[#fffdea] py-24 md:py-32 overflow-hidden"
            ref={ref}
            style={{
                backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                position: 'relative',
                padding: "2.5rem"
            }}
        >
            <div className="absolute inset-0 bg-[#0000009e] opacity-85" />

            <div className="flex min-h-screen items-center justify-center text-white z-10 relative">
                <div className="container px-4">
                    <div className="flex flex-col lg:flex-row">
                        <div className="xl:w-1/2"></div>
                        <div className="xl:w-3/4">
                            <div className="bg-black bg-opacity-70 p-4 md:p-6 rounded-lg">
                                <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                                    <motion.span
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                    >
                                        Contact
                                    </motion.span>
                                    {' '}
                                    <motion.span
                                        className={isJutepage ? "text-[#89AA5D]" : "text-blue-500"}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                        transition={{ delay: 0.5, duration: 0.6 }}
                                    >
                                        Us
                                    </motion.span>
                                </h2>
                                <motion.div
                                    className={`h-1 mt-3 md:mt-4 rounded-full mx-auto xl:mx-0 ${isJutepage ? "bg-[#89AA5D]" : "bg-blue-500"
                                        }`}
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: 100 } : { width: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                />

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="mt-6"
                                >

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
                                        <div>
                                            <h6 className="text-lg font-semibold text-white mb-2">Products</h6>
                                            <ul className="space-y-1">
                                                <li><a href="products.html?category=woven" className="hover:underline">Woven</a></li>
                                                <li><a href="products.html?category=knit" className="hover:underline">Knit</a></li>
                                                <li><a href="products.html?category=sweaters" className="hover:underline">Sweater</a></li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h6 className="text-lg font-semibold text-white mb-2">Location</h6>
                                            <ul className="mb-4">
                                                <li>
                                                    House # 317 (2nd floor),<br />
                                                    Road # 04, Baridhara DOHS, Dhaka-1206
                                                </li>
                                            </ul>

                                            <div className='flex flex-col justify-start'>
                                                <Link href="tel:+880-02-8417590" className="flex gap-1.5 hover:text-yellow-200 transition-colors w-full sm:w-auto py-1 text-xs md:text-sm" prefetch={false}>
                                                    <PhoneCall size={16} strokeWidth={1.75} className="shrink-0" />
                                                    <span className="truncate">+880-02-8417590</span>
                                                </Link>
                                                <Link href="tel:+880-02-8417591" className="flex gap-1.5 hover:text-yellow-200 transition-colors w-full sm:w-auto py-1 text-xs md:text-sm" prefetch={false}>
                                                    <PhoneCall size={16} strokeWidth={1.75} className="shrink-0" />
                                                    <span className="truncate">+880-02-8417591</span>
                                                </Link>
                                                <Link href="tel:+8801713363842" className="flex gap-1.5 hover:text-yellow-200 transition-colors w-full sm:w-auto py-1 text-xs md:text-sm" prefetch={false}>
                                                    <PhoneCall size={16} strokeWidth={1.75} className="shrink-0" />
                                                    <span className="truncate">+8801713363842</span>
                                                </Link>
                                                <Link href="mailto:saadi@prismbd.net" className="flex gap-1.5 hover:text-yellow-200 transition-colors w-full sm:w-auto py-1 text-xs md:text-sm" prefetch={false}>
                                                    <Mail size={16} strokeWidth={1.75} className="shrink-0" />
                                                    <span className="truncate">saadi@prismbd.net</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
