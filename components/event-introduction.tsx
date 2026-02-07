"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function EventIntroduction() {
    return (
        <section id="introduction" className="relative pt-24 pb-24 bg-[#B8E5DE] overflow-hidden">
            {/* Dreamy Background Mix */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#B8E5DE] to-white opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,1)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,1)_0%,transparent_70%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <span className="font-mono text-[#121212]/60 text-xs tracking-widest uppercase">
                        Thông tin sự kiện
                    </span>
                    <h2 className="text-2xl md:text-4xl font-black text-[#1D6E58] tracking-tighter mt-2">
                        KHÁM PHÁ <span className="text-[#FDD62B] drop-shadow-sm">FPTU 20</span>
                    </h2>
                </motion.div>

                <div className="space-y-24 md:space-y-40">
                    {/* Row 1: Image Left, Text Right */}
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -100, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <Image
                                src="/images/badminton_tournament_intro_1770303069230.png"
                                alt="Giới thiệu giải đấu"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h3 className="text-3xl md:text-5xl font-black text-[#1D6E58] leading-none">
                                GIỚI THIỆU <br /> GIẢI ĐẤU
                            </h3>
                            <p className="text-lg text-[#121212]/80 leading-relaxed font-medium">
                                FPTU 20 OPEN 26 là đấu trường rực lửa dành cho những tài năng trẻ. Một sự kiện bùng nổ với quy mô hoành tráng, nơi đam mê và kỹ năng hội tụ để tạo nên những khoảnh khắc lịch sử.
                            </p>
                            <div className="flex gap-4">
                                <div className="h-1 w-20 bg-[#FDD62B] rounded-full" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Row 2: Text Left, Image Right */}
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="order-2 md:order-1 space-y-6"
                        >
                            <h3 className="text-3xl md:text-5xl font-black text-[#1D6E58] leading-none">
                                MỤC ĐÍCH <br /> TỔ CHỨC
                            </h3>
                            <p className="text-lg text-[#121212]/80 leading-relaxed font-medium">
                                FPTU OPEN 2026 là giải cầu lông sinh viên mở rộng diễn ra ngày 07–08/03/2026 tại Đại học FPT Hà Nội dành cho học sinh – sinh viên ≤25 tuổi trên toàn quốc                            </p>
                            <div className="flex gap-4">
                                <div className="h-1 w-20 bg-[#FDD62B] rounded-full" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="order-1 md:order-2 relative aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white/40 flex items-center justify-center"
                        >
                            <img
                                src="/images/cupdanhhieu.png"
                                alt="cupdanhhieu"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
