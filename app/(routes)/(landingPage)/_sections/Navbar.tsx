"use client";

import Image from "next/image";
import logoImage from "../_assets/Logo.png";
import Button from "../_components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { MouseEvent } from "react";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "FAQs", href: "#faqs" },
];

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (
        e: MouseEvent<HTMLAnchorElement>,
        target: string
    ) => {
        e.preventDefault(); // Prevent default anchor link behavior
        const element = document.querySelector(target); // Find the section by id
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsOpen(false); // Close mobile menu after navigation
    };

    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50 ">
                <div className="container">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3  p-2 items-center px-4 md:pr-2 ">
                            <div>
                                <Image
                                    src={logoImage}
                                    alt="Formatrix Logo"
                                    className="h-9 md:h-15 auto w-auto cursor-pointer"
                                />
                            </div>
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            onClick={(e) =>
                                                handleNavClick(e, link.href)
                                            }
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden cursor-pointer"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0"
                                        )}
                                    />
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "transition origin-left ",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    />
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "transition origin-left",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    />
                                </svg>
                                <LoginLink>
                                <Button
                                    variant="secondary"
                                    className="hidden md:inline-flex items-center"
                                >
                                    Login
                                </Button>
                                </LoginLink>
                                <RegisterLink>
                                <Button
                                    variant="primary"
                                    className="hidden md:inline-flex items-center"
                                >
                                    Signup
                                </Button>
                                </RegisterLink>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4 ">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                                onClick={(e) =>
                                                    handleNavClick(e, link.href)
                                                }
                                                className="py-2"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <LoginLink>
                                        <Button variant="secondary">
                                            Login
                                        </Button>
                                        </LoginLink>
                                        <RegisterLink>
                                        <Button variant="primary">
                                            Signup
                                        </Button>
                                        </RegisterLink>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}
