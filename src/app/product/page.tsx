"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProductStore } from '@/store/productStore';

interface Product {
    id: string;
    name: string;
    category: string;
    imageUrl: string;
}

interface Category {
    id: string;
    name: string;
    subcategories: string[];
}

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

export default function Products() {
    const {
        activeCategory,
        activeSubcategory,
        searchQuery,
        setCategory,
        setSubcategory,
        setSearchQuery,
        clearFilters
    } = useProductStore();

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [selectedImage, setSelectedImage] = useState<Product | null>(null);

    const categories = useMemo<Category[]>(() => [
        {
            id: 'woven',
            name: 'WOVEN',
            subcategories: ['Shirts', 'Denims', 'Suits'],
        },
        {
            id: 'knit',
            name: 'KNIT',
            subcategories: ['T-Shirts', 'Polos', 'Jerseys'],
        },
        {
            id: 'sweater',
            name: 'SWEATER',
            subcategories: ['Sweaters'],
        },
    ], []);

    const products = useMemo<Product[]>(() => [
        {
            id: '1',
            name: 'CHAMBERS STRIPE DRESS SHIRT - SHIRTS',
            category: 'shirts',
            imageUrl: '/assets/img/products/shirts/01.webp',
        },
        {
            id: '2',
            name: 'CHAMBERS STRIPE DRESS SHIRT - NAVY',
            category: 'shirts',
            imageUrl: '/assets/img/products/shirts/02.webp',
        },
        {
            id: '3',
            name: 'TONAL WIDE STRIPE DRESS SHIRT',
            category: 'shirts',
            imageUrl: '/assets/img/products/shirts/03.webp',
        },
        {
            id: '4',
            name: 'SHADOW STRIPE DRESS SHIRT - PINK',
            category: 'shirts',
            imageUrl: '/assets/img/products/shirts/04.webp',
        },
        {
            id: '5',
            name: 'SHADOW STRIPE DRESS SHIRT - TAN',
            category: 'shirts',
            imageUrl: '/assets/img/products/shirts/05.webp',
        },
        {
            id: '6',
            name: 'SOLID DENIM PANT',
            category: 'denims',
            imageUrl: '/assets/img/products/denims/01.webp',
        },
        {
            id: '7',
            name: 'HERRINGBONE VESTED SUIT',
            category: 'suits',
            imageUrl: '/assets/img/products/suits/01.webp',
        },
        {
            id: '8',
            name: 'Tshirt',
            category: 't-shirt',
            imageUrl: '/assets/img/products/tshirt/01.webp',
        },
    ], []);

    useEffect(() => {
        const filterProducts = () => {
            setLoadingProducts(true);
            let results = [...products];

            if (searchQuery) {
                results = results.filter(product =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            if (activeSubcategory) {
                results = results.filter(product =>
                    product.category.toLowerCase() === activeSubcategory.toLowerCase()
                );
            } else if (activeCategory) {
                const category = categories.find(cat => cat.id === activeCategory.toLowerCase());
                if (category) {
                    const subcategories = category.subcategories.map(sub => sub.toLowerCase());
                    results = results.filter(product =>
                        subcategories.includes(product.category.toLowerCase())
                    );
                }
            }

            setTimeout(() => {
                setFilteredProducts(results);
                setLoadingProducts(false);
            }, 10);
        };

        filterProducts();
    }, [searchQuery, activeCategory, activeSubcategory, products, categories]);

    const handleCategoryClick = (categoryId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setCategory(categoryId);
    };

    const handleSubcategoryClick = (categoryId: string, subcategory: string) => {
        setCategory(categoryId);
        setSubcategory(subcategory.toLowerCase());
    };

    return (
        <div id="product" className="w-full bg-[#fffdea] py-24 md:py-32 px-10">
            <div className="flex min-h-screen items-start justify-center">
                <div className="container px-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Sidebar */}
                        <div className="w-full md:w-64 flex-shrink-0">
                            <div className="mb-4">
                                <Input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                                    className="w-full p-2 bg-gray-200 text-gray-800"
                                />
                            </div>
                            <Button
                                onClick={clearFilters}
                                className="w-full mb-6 p-2 bg-yellow-200 font-semibold text-black hover:bg-yellow-300"
                            >
                                SHOW ALL
                            </Button>

                            <Accordion type="single" collapsible className="space-y-2" defaultValue={activeCategory ?? undefined}>
                                {categories.map((category) => (
                                    <AccordionItem key={category.id} value={category.id} className="border-b">
                                        <div className="flex items-center justify-between">
                                            <AccordionTrigger className="font-bold text-gray-800">
                                                {category.name}
                                            </AccordionTrigger>
                                            <Button
                                                onClick={(e) => handleCategoryClick(category.id, e)}
                                                variant="ghost"
                                                size="sm"
                                                className={`text-xs ml-2 px-2 py-0 h-6 ${activeCategory === category.id && !activeSubcategory
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'text-blue-600 hover:bg-blue-100'
                                                    }`}
                                            >
                                                Filter
                                            </Button>
                                        </div>
                                        <AccordionContent>
                                            <div className="space-y-2">
                                                {category.subcategories.map((subcategory) => (
                                                    <div
                                                        key={subcategory}
                                                        className={`pl-2 cursor-pointer ${activeSubcategory === subcategory.toLowerCase()
                                                            ? 'text-blue-600 font-medium'
                                                            : 'text-gray-500 hover:text-gray-800'
                                                            }`}
                                                        onClick={() => handleSubcategoryClick(category.id, subcategory)}
                                                    >
                                                        {subcategory}
                                                    </div>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* Product Grid */}
                        <div className="flex-1">
                            <div className="min-h-screen relative">
                                <AnimatePresence mode="wait">
                                    {loadingProducts ? (
                                        <motion.div
                                            key="loading"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center justify-center h-64"
                                        >
                                            <div className="text-gray-500">Loading products...</div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key={`product-grid-${filteredProducts.length}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                        >
                                            {filteredProducts.length > 0 ? (
                                                filteredProducts.map((product) => (
                                                    <motion.div
                                                        key={product.id}
                                                        className="group"
                                                        whileHover={{ y: -5 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="relative h-75 w-full overflow-hidden bg-gray-100">
                                                            <div className="aspect-w-4 aspect-h-5 w-full h-full bg-white flex items-center justify-center">
                                                                <div className="relative w-full h-full">
                                                                    <Image
                                                                        src={product.imageUrl}
                                                                        alt={product.name}
                                                                        fill
                                                                        onClick={() => setSelectedImage(product)}
                                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                                        className="object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 className="mt-2 text-sm text-center font-medium text-gray-900 h-12">
                                                            {product.name}
                                                        </h3>
                                                    </motion.div>
                                                ))
                                            ) : (
                                                <div className="col-span-3 flex items-center justify-center h-64 text-center py-8 text-gray-500">
                                                    No products match your current filters
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-[#000000cf] flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
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
                                onClick={() => setSelectedImage(null)}
                                aria-label="Close"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div
                                className="relative w-full"
                                style={{ height: "calc(100vh - 260px)" }}
                            >
                                <Image
                                    src={selectedImage.imageUrl}
                                    alt={selectedImage.name}
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
    );
}
