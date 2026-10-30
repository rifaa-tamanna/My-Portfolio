"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Tech Stack", href: "#tech" },
        { name: "Projects", href: "#projects" },

        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#07070d]/80 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                {/* Logo RT */}
                <a href="#" className="group flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1px] shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
                        <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#07070d]">
                            <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 tracking-wider">
                                RT
                            </span>
                        </div>
                    </div>
                    <span className="font-display hidden font-semibold tracking-wide text-white sm:inline-block">
                        {profile.name}
                    </span>
                </a>

                {/* Desktop Nav Links */}
                <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="transition-colors hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-white md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute left-0 top-20 flex w-full flex-col gap-4 border-b border-white/10 bg-[#07070d]/95 px-6 py-6 backdrop-blur-2xl md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-slate-300 hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 text-center text-sm font-semibold text-white"
                    >
                        Let's Talk
                    </a>
                </div>
            )}
        </header>
    );
}