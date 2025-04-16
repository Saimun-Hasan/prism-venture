"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// UI Components
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
    SheetContent,
    SheetClose
} from "@/components/ui/sheet";

// Icons
import { Menu, X } from "lucide-react";

// Custom Components
import Topbar from "./topBar";

export default function NavBar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const currentYear = new Date().getFullYear();

    const isHomePage = pathname === "/";
    const isJutepage = pathname === "/jute"
    const isItpage = pathname === "/it"
    const isContact = pathname === "/contact"

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isHomePage && (
                <Topbar isHomePage={isHomePage} />
            )}

            {!isHomePage && (
                <header className={`
                    fixed flex h-[var(--navbar-height)] self-center shrink-0 items-center px-4 md:px-6 dark:bg-gray-950 z-40 transition-all duration-300
                    ${isContact
                        ? 'w-[50%] rounded-4xl top-2 bg-[#fff7a6]'
                        : isScrolled
                            ? 'w-[75%] xl:w-fit  rounded-4xl top-2 bg-[#fff7a6]'
                            : 'w-full top-0 bg-transparent'
                    }
                `}>
                    <Topbar isHomePage={isHomePage} />

                    <Link href="#" className="lg:hidden flex" prefetch={false}>
                        <Image src="/prism-bd.webp" alt="prismBd logo" width={35} height={35} />
                        <span className="sr-only">Prism BD</span>
                    </Link>
                    <nav className="flex-1 items-center justify-center ml-auto hidden lg:flex gap-6">
                        {!isContact ?
                            (
                                <>
                                    <Link
                                        href="/"
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                        prefetch={false}
                                    >
                                        Main Page
                                    </Link>
                                    <Link
                                        href="#home"
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                        prefetch={false}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="#about"
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                        prefetch={false}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="#services"
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                        prefetch={false}
                                    >
                                        Services
                                    </Link>
                                    {isItpage &&
                                        <Link
                                            href="#security"
                                            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                            prefetch={false}
                                        >
                                            Security
                                        </Link>
                                    }
                                    {isItpage &&
                                        <Link
                                            href="#quality_control"
                                            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                            prefetch={false}
                                        >
                                            Quality
                                        </Link>
                                    }
                                    {!isItpage &&
                                        <Link
                                            href="#products"
                                            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                            prefetch={false}
                                        >
                                            Products
                                        </Link>
                                    }
                                    {!isJutepage && !isItpage &&
                                        <Link
                                            href="#gallery"
                                            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                            prefetch={false}
                                        >
                                            Gallery
                                        </Link>
                                    }
                                    <Link
                                        href="#contact"
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                        prefetch={false}
                                    >
                                        Contact
                                    </Link>
                                </>
                            )
                            :
                            (
                                <>
                                    <Link
                                        href="/"
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                        prefetch={false}
                                    >
                                        Main Page
                                    </Link>
                                    <Link
                                        href="/apparel"
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                        prefetch={false}
                                    >
                                        Apparel
                                    </Link>
                                    <Link
                                        href="/jute"
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                        prefetch={false}
                                    >
                                        Jute
                                    </Link>
                                    <Link
                                        href="/it"
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                        prefetch={false}
                                    >
                                        It
                                    </Link>
                                </>
                            )
                        }
                    </nav>


                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="link" size="icon" className="lg:hidden ml-auto p-2 rounded-md hover:bg-blue-100">
                                <Menu className="h-8 w-8 text-[#002df7] hover:text-blue-800" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="bg-[#fff7a6]">

                            <SheetTitle className="sr-only">
                                Navigation Menu
                            </SheetTitle>
                            <SheetDescription className="sr-only">
                                Prism Venture Where Professionalism Meets Comfort
                            </SheetDescription>

                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                            <SheetClose className="absolute top-2 right-2 z-10 bg-[#006ef7] rounded-full p-2 shadow hover:bg-black">
                                <X className="h-4 w-4 text-white" />
                                <span className="sr-only">Close</span>
                            </SheetClose>


                            <div className="flex items-center gap-3 mb-6 pt-4">
                                <Image src="/prism-bd.webp" alt="Prism Venture logo" width={40} height={40} className="rounded-md" />
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold">Prism Venture</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Where Professionalism Meets Comfort</span>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                {!isContact ? (
                                    <>
                                        <Link href="/" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                            Main Page
                                        </Link>
                                        <Link href="#home" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                            Home
                                        </Link>
                                        <Link href="#about" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                            About
                                        </Link>
                                        <Link href="#services" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                            Services
                                        </Link>

                                        {isItpage && (
                                            <>
                                                <Link href="#security" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                                    Security
                                                </Link>
                                                <Link href="#quality_control" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                                    Quality
                                                </Link>
                                            </>
                                        )}

                                        {!isItpage && (
                                            <Link href="#products" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                                Products
                                            </Link>
                                        )}

                                        {!isJutepage && !isItpage && (
                                            <Link href="#gallery" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                                Gallery
                                            </Link>
                                        )}

                                        <Link href="#contact" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                            Contact
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                            Main Page
                                        </Link>
                                        <Link href="/apparel" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                            Apparel
                                        </Link>
                                        <Link href="/jute" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                            Jute
                                        </Link>
                                        <Link href="/it" onClick={() => setIsSheetOpen(false)} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors" prefetch={false}>
                                            IT
                                        </Link>
                                    </>
                                )}
                            </div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex justify-between items-center border-t pt-4 border-[#006ef7] dark:border-gray-700">
                                    <div>
                                        <button className="text-medium">
                                            ©
                                            <Link
                                                href="https://www.linkedin.com/in/saimun-hasan"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="italic font-semibold text-black"
                                            >
                                                Saimun Hasan.
                                            </Link>{" "}
                                            {currentYear}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </header>
            )}
        </>
    )
}