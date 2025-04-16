"use client";

// React
import { useState, useEffect, useRef } from "react";

// Animation
import { motion, AnimatePresence, useInView } from "framer-motion";

// Next.js
import Image from "next/image";


interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    height: number;
    width: number;
}

const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: "/assets/img/contact/01.webp",
        alt: "Gallery Image 1",
        width: 800,
        height: 600
    },
    {
        id: 2,
        src: "/assets/img/contact/02.webp",
        alt: "Gallery Image 2",
        width: 800,
        height: 1000
    },
    {
        id: 3,
        src: "/assets/img/contact/03.webp",
        alt: "Gallery Image 3",
        width: 800,
        height: 750
    },
    {
        id: 4,
        src: "/assets/img/contact/04.webp",
        alt: "Gallery Image 4",
        width: 800,
        height: 500
    },
    {
        id: 5,
        src: "/assets/img/contact/05.webp",
        alt: "Gallery Image 5",
        width: 800,
        height: 900
    },
    {
        id: 6,
        src: "/assets/img/contact/06.webp",
        alt: "Gallery Image 6",
        width: 800,
        height: 650
    },
    {
        id: 7,
        src: "/assets/img/contact/07.webp",
        alt: "Gallery Image 7",
        width: 400,
        height: 400
    },
    {
        id: 8,
        src: "/assets/img/contact/08.webp",
        alt: "Gallery Image 8",
        width: 500,
        height: 500
    },
];

export default function ApparelGallery() {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [masonryImages, setMasonryImages] = useState<GalleryImage[][]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef(null);
    const headingInView = useInView(headingRef, { once: true, margin: '-50px' });

    const distributeImagesIntoColumns = (images: GalleryImage[], columnCount: number) => {
        const columnArrays: GalleryImage[][] = Array.from({ length: columnCount }, () => []);

        const columnHeights: number[] = Array.from({ length: columnCount }, () => 0);

        images.forEach(image => {
            const minHeight = Math.min(...columnHeights);
            const minHeightColumnIndex = columnHeights.indexOf(minHeight);

            if (columnArrays[minHeightColumnIndex]) {
                columnArrays[minHeightColumnIndex].push(image);
            }

            if (typeof columnHeights[minHeightColumnIndex] !== 'undefined') {
                columnHeights[minHeightColumnIndex] += image.height / image.width;
            }
        });

        return columnArrays;
    };

    useEffect(() => {
        const handleResize = () => {
            let newColumnCount = 3;
            if (window.innerWidth < 640) newColumnCount = 1;
            else if (window.innerWidth < 1024) newColumnCount = 2;

            setMasonryImages(distributeImagesIntoColumns(galleryImages, newColumnCount));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.03,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 }
        }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 }
        }
    };

    const openModal = (image: GalleryImage) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <motion.div
            id="gallery"
            className="w-full bg-[#fffdea] py-24 md:py-32 overflow-hidden"
            style={{ position: 'relative', padding: "2.5rem" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex min-h-screen items-center justify-center text-white">
                <div className="container mx-auto px-4 md:px-8 relative">
                    <motion.div
                        ref={headingRef}
                        className="mb-16 md:mb-24 text-center max-w-3xl mx-auto z-10 relative"
                        initial={{ opacity: 0, y: 50 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h2
                            className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-black leading-12 italic"
                        >
                            Gallery
                        </motion.h2>
                    </motion.div>

                    {/* Masonry Gallery */}
                    <div ref={containerRef} className="flex gap-4">
                        {masonryImages.map((column, columnIndex) => (
                            <motion.div
                                key={`column-${columnIndex}`}
                                className="flex flex-col gap-4 flex-1"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: columnIndex * 0.2
                                        }
                                    }
                                }}
                            >
                                {column.map((image) => (
                                    <motion.div
                                        key={image.id}
                                        className="relative overflow-hidden rounded-lg bg-white shadow cursor-pointer"
                                        variants={imageVariants}
                                        whileHover="hover"
                                        onClick={() => openModal(image)}
                                    >
                                        <div
                                            className="relative w-full"
                                            style={{ paddingBottom: `${(image.height / image.width) * 100}%` }}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw`}
                                                className="object-cover"
                                                priority={image.id <= 4}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                className="fixed inset-0 bg-[#000000cf] flex items-center justify-center z-50 p-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeModal}
                            >
                                <motion.div
                                    className="relative max-w-lg w-full bg-transparent rounded-lg overflow-hidden"
                                    variants={modalVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    onClick={e => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute top-2 right-2 z-10 bg-gray-700 rounded-full p-2 shadow hover:bg-black"
                                        onClick={closeModal}
                                        aria-label="Close"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <div
                                        className="relative w-full"
                                        style={{
                                            height: "calc(100vh - 260px)",
                                        }}
                                    >
                                        <Image
                                            src={selectedImage.src}
                                            alt={selectedImage.alt}
                                            fill
                                            sizes="100vw"
                                            className="object-contain rounded-2xl"
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
