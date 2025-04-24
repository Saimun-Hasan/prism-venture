"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const currentYear = new Date().getFullYear();

    const isHomePage = pathname === "/";
    // const isJutepage = pathname === "/jute";
    const isItpage = pathname === "/it";
    const isContact = pathname === "/contact";
    const isProduct = pathname === "/product";

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

    const scrollToSection = useCallback((sectionId: string) => {
        setIsSheetOpen(false);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handleNavigation = useCallback((path: string, sectionId: string | null = null) => {
        setIsSheetOpen(false);

        if (path === pathname) {
            if (sectionId) {
                scrollToSection(sectionId);
            }
            return;
        }

        router.push(path);

        if (sectionId) {
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    }, [pathname, router, scrollToSection]);

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
                            ? 'w-[75%] xl:w-fit rounded-4xl top-2 bg-[#fff7a6]'
                            : 'w-full top-0 bg-transparent'
                    }
                `}>
                    <Topbar isHomePage={isHomePage} />

                    <div className="lg:hidden flex" onClick={() => handleNavigation("/")}>
                        <Image src="/prism-bd.webp" alt="Prism Venture logo" width={35} height={35} />
                        <span className="sr-only">Prism BD</span>
                    </div>

                    <nav className="flex-1 items-center justify-center ml-auto hidden lg:flex gap-6">
                        {!isContact ? (
                            <>
                                <button
                                    onClick={() => handleNavigation("/")}
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                >
                                    Home
                                </button>
                                {/* <button
                                    onClick={() => isProduct ? handleNavigation("/apparel", "home") : scrollToSection("home")}
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                >
                                    Home
                                </button> */}
                                <button
                                    onClick={() => isProduct ? handleNavigation("/apparel", "about") : scrollToSection("about")}
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => isProduct ? handleNavigation("/apparel", "services") : scrollToSection("services")}
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                >
                                    Services
                                </button>
                                {isItpage && (
                                    <button
                                        onClick={() => scrollToSection("security")}
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                    >
                                        Security
                                    </button>
                                )}
                                {isItpage && (
                                    <button
                                        onClick={() => scrollToSection("quality_control")}
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                    >
                                        Quality
                                    </button>
                                )}
                                {!isItpage && (
                                    <button
                                        onClick={() => isProduct ? handleNavigation("/apparel", "products") : scrollToSection("products")}
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                    >
                                        Products
                                    </button>
                                )}
                                {!isItpage && (
                                    <button
                                        onClick={() => isProduct ? handleNavigation("/apparel", "gallery") : scrollToSection("gallery")}
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                    >
                                        Gallery
                                    </button>
                                )}
                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                >
                                    Contact
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => handleNavigation("/")}
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => handleNavigation("/apparel")}
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                >
                                    Apparel
                                </button>
                                <button
                                    onClick={() => handleNavigation("/jute")}
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                >
                                    Jute
                                </button>
                                <button
                                    onClick={() => handleNavigation("/it")}
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:text-[#006ef7] focus:text-[#006ef7] focus:outline-none"
                                >
                                    IT
                                </button>
                            </>
                        )}
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
                                        <button onClick={() => handleNavigation("/")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                            Home
                                        </button>
                                        {/* <button onClick={() => isProduct ? handleNavigation("/apparel", "home") : scrollToSection("home")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                            Home
                                        </button> */}
                                        <button onClick={() => isProduct ? handleNavigation("/apparel", "about") : scrollToSection("about")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                            About
                                        </button>
                                        <button onClick={() => isProduct ? handleNavigation("/apparel", "services") : scrollToSection("services")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                            Services
                                        </button>

                                        {isItpage && (
                                            <>
                                                <button onClick={() => scrollToSection("security")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                                    Security
                                                </button>
                                                <button onClick={() => scrollToSection("quality_control")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                                    Quality
                                                </button>
                                            </>
                                        )}

                                        {!isItpage && (
                                            <button onClick={() => isProduct ? handleNavigation("/apparel", "products") : scrollToSection("products")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                                Products
                                            </button>
                                        )}

                                        {!isItpage && (
                                            <button onClick={() => isProduct ? handleNavigation("/apparel", "gallery") : scrollToSection("gallery")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                                Gallery
                                            </button>
                                        )}

                                        <button onClick={() => scrollToSection("contact")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                            Contact
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => handleNavigation("/")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                            Home
                                        </button>
                                        <button onClick={() => handleNavigation("/apparel")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                            Apparel
                                        </button>
                                        <button onClick={() => handleNavigation("/jute")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                            Jute
                                        </button>
                                        <button onClick={() => handleNavigation("/it")} className="flex w-full items-center py-2 px-5 rounded-md hover:text-white hover:bg-[#006ef7] dark:hover:bg-gray-800 text-sm font-semibold transition-colors text-left">
                                            IT
                                        </button>
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
                                                className="font-semibold text-black"
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
    );
}