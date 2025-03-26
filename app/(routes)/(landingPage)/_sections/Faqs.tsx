"use client"
import Tag from "../_components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "How is Formatrix different from other form builders?",
        answer: "Formatrix combines AI-powered form generation with an intuitive drag-and-drop interface, making form creation faster and easier. It simplifies the process without compromising on customization or functionality, empowering users to create high-quality forms effortlessly.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Not at all! Formatrix is designed to be intuitive from the start. Whether you're a beginner or an experienced user, you can start building forms within minutes.",
    },
    {
        question: "How does AI-powered form generation work?",
        answer: "Formatrix uses AI to intelligently generate forms based on your input and requirements. The AI analyzes your preferences, providing suggestions for form fields, layout, and structure, making the process faster and more personalized.",
    },
    {
        question: "Can I customize my forms?",
        answer: "Yes! Formatrix offers extensive customization options. You can edit block properties, adjust styling, and modify field types to suit your specific needs, giving you full control over the design and functionality of your forms.",
    },
    {
        question: "Can I work offline with Formatrix?",
        answer: "Currently, Formatrix requires an internet connection to create and manage forms, but we are working on adding offline functionality in future updates.",
    },
    {
        question: "How do I publish and share my forms?",
        answer: "Once your form is ready, you can easily publish it and share it via a unique URL. You can also embed the form on your website or share the link directly with users to start collecting responses.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <section className="py-24" id="faqs">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We've got{" "}
                    <span className="text-[#c19eff]">answers</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto ">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            onClick={() => setSelectedIndex(faqIndex)}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6 cursor-pointer"
                        >
                            <div className="flex justify-between items-start">
                                
                                    <h3 className="font-medium m-0">
                                        {faq.question}
                                    </h3>
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
                                        className={twMerge(
                                            "feather feather-plus text-[#c19eff] flex-shrink-0",
                                            selectedIndex == faqIndex &&
                                                "rotate-45"
                                        )}
                                    >
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
