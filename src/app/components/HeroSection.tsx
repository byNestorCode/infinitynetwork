"use client"
import React from "react";
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { useState, useEffect } from "react";

const moonhouse = localFont({
    src: '/../fonts/moonhouse.ttf',
    variable: '--font-moonhouse',
});

const quango = localFont({
    src: '/../fonts/Quango.otf',
    variable: '--font-quango',
});

const HeroSection = () => {

    const words = ['💡 Innovation', '⚛️ Science', '🧠 Technology Artists', '🚀 The Future', '🪐 Infinity Network'];

    // Estado para palabra actual
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    // Cambiar la palabra
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    const wordVariants = {
        hidden: { filter: 'blur(10px)', opacity: 0, scale: 0.8 },
        visible: { filter: 'blur(0px)', opacity: 1, scale: 1 },
        exit: { filter: 'blur(10px)', opacity: 0, scale: 0.8 },
    };

    return (
        <section className="relative z-30 h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 py-12 px-10">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-12 place-self-center text-center sm:text-left order-2 xl:order-none">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Hi there! We&apos;re{""}
                        </span>
                        <br />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentWordIndex}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={wordVariants}
                                transition={{ 
                                    opacity: { duration: 1, ease: 'easeInOut' },
                                    scale: { duration: 1, ease: 'easeInOut' }, 
                                    filter: { duration: 1, ease: 'easeInOut' },
                                }}
                                className="mt-6 sm:h-[70px]"
                            >
                                {words[currentWordIndex]}
                            </motion.div>
                        </AnimatePresence>
                        {/* <TypeAnimation 
                            sequence={[
                                '💡 Innovation',
                                1000,
                                '⚛️ Science',
                                1000,
                                '🧠 Technology Artists',
                                1000,
                                '🚀 The Future',
                                1000,
                                '🪐 Infinity Network',
                                1000
                            ]}
                            wrapper="span"
                            speed={30}
                            style={{
                                fontFamily:"var(--font-moonhouse)",
                                fontSize:"1em",
                                display:"inline-block",
                                marginTop:"1rem",
                                marginBottom:"1rem",
                            }}
                            repeat={Infinity}
                            className={
                                `${moonhouse.variable} uppercase tracking-[0.15em] font-bold`
                            }
                        /> */}
                    </h1>
                    <p className="text-center text-[#ADB7BE] text-base sm:text-lg mt-6 mb-6 lg:text-xl">
                        {/* Professionals in technological solutions and tools (Cloud, Web, Apps, Security, Consulting and Support). */}
                        Anything you can dream of, we can make it happen (Cloud, Web, Apps, Security, Consulting and Support)
                    </p>
                    <div className="place-self-center">
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Contact Us</button>
                        {/* <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"><span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span></button> */}
                    </div>
                </div>
                {/* <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/nestor.png"
                            alt="hero image"
                            width={300}
                            height={300}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        />
                        <motion.svg className="absolute top-0 left-0 w-full h-full" 
                        fill="transparent" 
                        viewBox="0 0 506 506"
                        xmlns="http://www.w3.org/2000/svg">
                            <motion.circle 
                            cx="253"
                            cy="253"
                            r="250"
                            stroke="#4dfdaf"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{strokeDasharray: "24 10 0 0"}}
                            animate={{
                                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                rotate: [120, 360],

                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            />
                        </motion.svg>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default HeroSection;