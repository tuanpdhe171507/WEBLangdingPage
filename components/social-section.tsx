"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import { Facebook } from "lucide-react"
import Image from "next/image"

const instagramPosts = [
    { image: "/energy-drink-lifestyle-gym-workout.jpg", likes: "2.4k" },
    { image: "/content-creator-streaming-setup-neon.jpg", likes: "1.8k" },
    { image: "/skateboarder-urban-street-sunset.jpg", likes: "3.2k" },
    { image: "/student-studying-library-late-night.jpg", likes: "956" },
    { image: "/entrepreneur-startup-office-meeting.jpg", likes: "1.5k" },
    { image: "/athlete-fitness-morning-routine.jpg", likes: "2.1k" },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.15,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 20,
        },
    },
}

export function SocialSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <section id="creators" className="relative py-16 overflow-hidden bg-white">
            {/* Background elements to create the "pha màu" effect with a grid */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(#1D6E58 1px, transparent 1px), linear-gradient(90deg, #1D6E58 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        opacity: 0.1
                    }}
                />
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-orange-200/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-teal-200/50 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-[-0.07em] leading-[0.85] inline-flex flex-col md:flex-row items-center justify-center gap-x-6">
                        <span className="text-[#106B52]">Đại Sứ</span>
                        <span className="text-[#FFD700]">Thương Hiệu</span>
                    </h2>
                    <motion.p
                        className="mt-8 text-[#106B52] font-mono font-bold tracking-[0.3em] text-sm md:text-base opacity-40 uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.4 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        KẾT NỐI ĐAM MÊ • BỨT PHÁ GIỚI HẠN
                    </motion.p>
                </motion.div>

                <div className="relative w-full overflow-hidden py-10">
                    <motion.div
                        className="flex gap-4 w-max"
                        animate={{
                            x: ["-50%", "0%"]
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {/* Duplicate the list to create a seamless loop */}
                        {[...instagramPosts, ...instagramPosts].map((post, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    scale: 1.05,
                                    zIndex: 10,
                                    transition: { type: "spring", stiffness: 300, damping: 20 },
                                }}
                                className="relative w-56 aspect-square rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0 shadow-lg border border-white/20"
                            >
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={`Instagram post ${index + 1}`}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1D6E58]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                        <span className="font-bold text-sm tracking-tighter">{post.likes}</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    className="flex justify-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.a
                        href="https://www.facebook.com/FPTUbadminton"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#FDD62B] text-[#1D6E58] px-6 py-3 rounded-full font-black text-xs tracking-[0.1em] relative overflow-hidden group shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full"
                            whileHover={{ x: "200%" }}
                            transition={{ duration: 0.6 }}
                        />
                        <div className="p-2 border border-[#1D6E58] rounded-md bg-[#1D6E58]/5 relative z-10">
                            <Facebook className="w-4 h-4" />
                        </div>
                        <span className="relative z-10">FOLLOW FPTU OPEN 2026</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
