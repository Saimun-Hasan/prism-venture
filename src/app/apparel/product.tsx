"use client";

// React
import React, { useRef, useState } from "react";

// Animation
import { motion, useInView, AnimatePresence } from "motion/react";

// UI Components
// import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    // CardFooter,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
/* import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"; */

//Lucide Icon
// import { ChevronDown } from "lucide-react";

// Next.js
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// Zustand store
// import { useProductStore } from "@/store/productStore";



export default function ApparelProduct() {
    /* const router = useRouter();
    const setFilters = useProductStore((state) => state.setFilters); */

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


    const defaultBg = "/assets/img/bg/products/bg1.webp";
    const [bgImage, setBgImage] = useState<string>(defaultBg);

    /* const handleSubcategoryClick = (category: string, subcategory: string) => {
        setFilters(category, subcategory.toLowerCase());
        router.push("/product");
    }; */

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
                <div className="container mx-auto px-4 md:px-8 relative text-justify">
                    <motion.div
                        className="mb-16 md:mb-24 text-center max-w-3xl mx-auto z-10 relative"
                        variants={titleVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-12">
                            <motion.span
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Our
                            </motion.span>
                            {' '}
                            <motion.span
                                className="text-[#fff7a6]"
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Products
                            </motion.span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8"
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
                                    setBgImage('/assets/img/bg/products/bg1.webp');
                                }}
                                onMouseLeave={() => {
                                    setBgImage(defaultBg);
                                }}
                            >
                                <CardContent className="relative w-full flex-grow">
                                    <Image
                                        src={'/assets/img/products/woven.webp'}
                                        alt={"Woven Products"}
                                        quality={80}
                                        priority
                                        width={400}
                                        height={400}
                                        className="transition-transform duration-700 ease-in-out mb-6 rounded-sm"
                                    />
                                    <CardTitle className="text-2xl uppercase tracking-widest text-white font-bold">
                                        Woven
                                    </CardTitle>
                                    <motion.div
                                        className="py-3 text-lg text-white overflow-auto"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <p>
                                            At Prism, you can discover a diverse range of woven apparel fit for men, women, and kids.
                                            From sleek suits and jackets to all kinds of denims, casual pants and skirts.
                                            Our collection boasts a variety of fabrics and washes.
                                            Explore both formal and casual shorts for everybody and adorable denims and
                                            shorts with unique prints and washes for the little ones.
                                        </p>
                                    </motion.div>
                                </CardContent>
                                {/* <CardFooter className="flex items-center justify-center px-8">
                                    <Button variant="outline" className='rounded-r-none w-full uppercase font-bold text-medium p-4' onClick={() => {
                                        setFilters('woven', null);
                                        router.push("/product");
                                    }}>
                                        Woven Products
                                    </Button>


                                    <DropdownMenu>
                                        <DropdownMenuTrigger style={{ background: 'white', padding: '6px', borderRadius: "0px 3px 3px 0px" }}>
                                            <ChevronDown size={24} className="text-black" />
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent align="start" side="bottom">
                                            <DropdownMenuItem onClick={() => handleSubcategoryClick('woven', 'shirts')}>
                                                Shirts
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleSubcategoryClick('woven', 'denims')}>
                                                Denims
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleSubcategoryClick('woven', 'suits')}>
                                                Suits
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </CardFooter> */}
                            </Card>
                        </motion.div>



                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <Card
                                className="overflow-visible relative transition duration-300 ease-in-out cursor-pointer bg-[#1d1d1d] px-2 py-5 z-10 flex flex-col h-full border-none"
                                onMouseEnter={() => {
                                    setBgImage('/assets/img/bg/products/bg2.webp');
                                }}
                                onMouseLeave={() => {
                                    setBgImage(defaultBg);
                                }}
                            >
                                <CardContent className="relative w-full flex-grow">
                                    <Image
                                        src={'/assets/img/products/knit.webp'}
                                        alt={"Knit Products"}
                                        quality={80}
                                        priority
                                        width={400}
                                        height={400}
                                        className="transition-transform duration-700 ease-in-out mb-6 rounded-sm"
                                    />
                                    <CardTitle className="text-2xl uppercase tracking-widest text-white font-bold">
                                        Knit
                                    </CardTitle>
                                    <motion.p
                                        className="py-3 text-lg text-white"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        Indulge in comfort and style with our versatile knitwear collection here. For men, women, and kids,
                                        we offer a wide range of tees, polos, sweatshirts, hoodies, and more, crafted from premium fabrics like Single
                                        jersey, Double jersey, Interlock, Rib, Pique, Lacoste, French terry, Fleece, Pima cotton, Cotton modal, and various blends.
                                        Our knitwear comes in an array of prints, embroideries, and washes, ensuring fashion-forward choices for every occasion.
                                        Embrace luxury and coziness with our curated selection of boxers, underwear, tank tops, panties, pajamas, and sleepwear.
                                    </motion.p>
                                </CardContent>
                                {/* <CardFooter className="flex items-center justify-center px-8">
                                    <Button variant="outline" className='rounded-r-none w-full uppercase font-bold text-medium p-4' asChild>
                                        <Link href="#">Knit</Link>
                                    </Button>


                                    <DropdownMenu>
                                        <DropdownMenuTrigger style={{ background: 'white', padding: '6px', borderRadius: "0px 3px 3px 0px" }}>
                                            <ChevronDown size={24} className="text-black" />
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent align="start" side="bottom">
                                            <DropdownMenuItem onClick={() => handleSubcategoryClick('knit', 't-shirt')}>
                                                T-shirts
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleSubcategoryClick('knit', 'oolo')}>
                                                Polo
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleSubcategoryClick('knit', 'jersey')}>
                                                Single & Double Jersey
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </CardFooter> */}
                            </Card>
                        </motion.div>



                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <Card
                                className="overflow-visible relative transition duration-300 ease-in-out cursor-pointer bg-[#1d1d1d] px-2 py-5 z-10 flex flex-col h-full border-none"
                                onMouseEnter={() => {
                                    setBgImage('/assets/img/bg/products/bg3.webp');
                                }}
                                onMouseLeave={() => {
                                    setBgImage(defaultBg);
                                }}
                            >
                                <CardContent className="relative w-full flex-grow">
                                    <Image
                                        src={'/assets/img/products/sweater.webp'}
                                        alt={"Sweater products"}
                                        quality={80}
                                        priority
                                        width={400}
                                        height={400}
                                        className="transition-transform duration-700 ease-in-out mb-6 rounded-sm"
                                    />
                                    <CardTitle className="text-2xl uppercase tracking-widest text-white font-bold">
                                        Sweater
                                    </CardTitle>
                                    <motion.p
                                        className="py-3 text-lg text-white"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        Wrap yourself in warmth and elegance with our exquisite sweater collection. From cozy sweaters and jumpers to versatile vests and cardigans, our range offers a
                                        variety of gauges and intricate designs like jacquard and intarsia. Our sweaters are a perfect blend of comfort and style, crafted from premium materials including cotton,
                                        acrylic, wool, merino wool, tape, boucle,
                                        and chenille. Embrace the beauty of handcrafted knits and elevate your winter wardrobe with our luxurious selection.
                                    </motion.p>
                                </CardContent>
                                {/* <CardFooter className="flex items-center justify-center px-8">
                                    <Button variant="outline" className='w-full uppercase font-bold text-medium p-5' asChild>
                                        <Link href="#">Sweater</Link>
                                    </Button>
                                </CardFooter> */}
                            </Card>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}