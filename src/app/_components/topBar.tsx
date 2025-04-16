"use client";

// Next.js
import Link from "next/link";

// Icons
import { PhoneCall, Mail } from "lucide-react";

interface TopbarProps {
    isHomePage: boolean;
}

export default function Topbar({ isHomePage }: TopbarProps) {
    return (
        <div
            className={`
                z-50 justify-self-center bg-black/80 backdrop-blur-sm dark:bg-gray-900/90 text-sm text-white dark:text-gray-300 flex justify-center h-[var(--topbar-height)] p-2
                ${isHomePage ? 'fixed w-full' : 'fixed bottom-4 left-4 rounded-4xl'}`
            }
            style={{ "--topbar-height": "35px" } as React.CSSProperties}
        >
            <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-10 w-full max-w-6xl">
                <Link href="tel:+880-02-8417590" className="flex gap-1.5 items-center hover:text-yellow-200 transition-colors w-full sm:w-auto justify-center sm:justify-start py-1 text-xs md:text-sm" prefetch={false}>
                    <PhoneCall size={16} strokeWidth={1.75} className="shrink-0 hidden sm:block" />
                    <span className="truncate">+880-02-8417590</span>
                </Link>
                <Link href="tel:+8801713363842" className="flex gap-1.5 items-center hover:text-yellow-200 transition-colors w-full sm:w-auto justify-center sm:justify-start py-1 text-xs md:text-sm" prefetch={false}>
                    <PhoneCall size={16} strokeWidth={1.75} className="shrink-0 hidden sm:block" />
                    <span className="truncate">+8801713363842</span>
                </Link>
                <Link href="mailto:saadi@prismbd.net" className="flex gap-1.5 items-center hover:text-yellow-200 transition-colors w-full sm:w-auto justify-center sm:justify-start py-1 text-xs md:text-sm" prefetch={false}>
                    <Mail size={16} strokeWidth={1.75} className="shrink-0 hidden sm:block" />
                    <span className="truncate">saadi@prismbd.net</span>
                </Link>
            </div>
        </div>
    )
}