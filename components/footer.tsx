"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useState, useRef } from "react"
import Link from "next/link"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 20,
        },
    },
}


export function Footer() {
    const [email, setEmail] = useState("")
    const [isHovering, setIsHovering] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const footerRef = useRef(null)
    const isInView = useInView(footerRef, { once: true, margin: "-100px" })

    const handleSubmit = () => {
        setIsSubmitting(true)
        setTimeout(() => setIsSubmitting(false), 2000)
    }

    const footerLinks = [
        {
            title: "Giải Đấu",
            links: ["Cầu Đơn", "Cầu Đôi", "Lịch Thi Đấu", "Bảng Xếp Hạng"],
        },
        {
            title: "Sự Kiện",
            links: ["Lễ Khai Mạc", "Vòng Bán Kết", "Vòng Chung Kết", "Gala Trao Giải"],
        },
        {
            title: "Tổ Chức",
            links: ["Giới Thiệu", "Ban Tổ Chức", "Nhà Tài Trợ", "Liên Hệ"],
        },
        {
            title: "Liên Hệ",
            links: ["SĐT:0987654321", "Email: [EMAIL_ADDRESS]", "Địa Chỉ: Hà Nội"],
        },
    ]

    return (
        <footer ref={footerRef} id="careers" className="relative bg-[#121212] pt-16 pb-6 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] overflow-hidden">
                        <motion.span
                            className="block"
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
                        >
                            SẴN SÀNG
                        </motion.span>
                        <motion.span
                            className="block text-[#AFFF00]"
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const, delay: 0.1 }}
                        >
                            TỎA SÁNG?
                        </motion.span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-xl mx-auto mb-12"
                >
                    <div className="flex flex-col sm:flex-row gap-3">
                        <motion.div className="flex-1 relative" whileFocus={{ scale: 1.02 }}>
                            <motion.input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email của bạn..."
                                className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 font-mono text-sm focus:outline-none focus:border-[#FDD62B] transition-all duration-300"
                                whileFocus={{ borderColor: "#FDD62B" }}
                            />
                            <motion.div
                                className="absolute inset-0 rounded-xl pointer-events-none"
                                animate={email.length > 0 ? { boxShadow: "0 0 20px rgba(253,214,43,0.2)" } : { boxShadow: "none" }}
                            />
                        </motion.div>
                        <motion.button
                            className="bg-[#FDD62B] text-[#121212] px-6 py-3 rounded-xl font-bold text-sm tracking-wide whitespace-nowrap relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}

                            onClick={handleSubmit}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                            />
                            <motion.span
                                className="relative z-10"
                                animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                                transition={{ duration: 0.5, repeat: isSubmitting ? Number.POSITIVE_INFINITY : 0 }}
                            >
                                {isSubmitting ? "Đang gửi..." : "Tham gia ngay"}
                            </motion.span>
                        </motion.button>
                    </div>
                    <motion.p
                        className="text-white/40 font-mono text-xs mt-2 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Hơn 1000+ lông thủ đã đăng ký. Chỉ có niềm vui và đam mê.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-white/60 font-mono text-xs max-w-xl mx-auto leading-relaxed">
                        FPTU Open 2026 là giải đấu cầu lông quy mô lớn, nơi hội tụ những tài năng trẻ và lan tỏa tinh thần thể thao
                        năng động. Hãy cùng chúng tôi bứt phá giới hạn bản thân.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {footerLinks.map((section, sectionIndex) => (
                        <motion.div key={section.title} variants={itemVariants}>
                            <h4 className="font-bold text-white text-sm mb-3">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((item) => (
                                    <li key={item}>
                                        <motion.div whileHover={{ x: 4 }} transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}>

                                            <Link
                                                href="#"
                                                className="text-white/60 hover:text-[#AFFF00] font-mono text-xs transition-colors inline-block"
                                            >
                                                {item}
                                            </Link>
                                        </motion.div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
                    >

                        <div className="flex flex-col leading-[0.75] italic font-black uppercase tracking-tighter">
                            <span className="text-lg bg-gradient-to-b from-[#F9E43C] via-[#FFF9C4] to-[#F9E43C] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] px-1">
                                FPTU 20
                            </span>
                            <span className="text-lg bg-gradient-to-b from-[#F9E43C] via-[#FFF9C4] to-[#F9E43C] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] px-1">
                                OPEN 26
                            </span>
                        </div>

                    </motion.div>


                    <p className="text-white/40 font-mono text-xs">© 2026 FPTU Open. Mọi quyền được bảo lưu.</p>

                    <motion.p
                        className="text-white/30 font-mono text-xs cursor-pointer"
                        onHoverStart={() => setIsHovering(true)}
                        onHoverEnd={() => setIsHovering(false)}
                        animate={
                            isHovering
                                ? {
                                    rotate: [0, -5, 5, -5, 5, 0],
                                    scale: [1, 1.1, 1],
                                    color: "#FDD62B",
                                }
                                : {
                                    rotate: 0,
                                    scale: 1,
                                    color: "rgba(255,255,255,0.3)",
                                }
                        }
                        transition={{ duration: 0.5 }}
                    >
                        lan tỏa đam mê
                    </motion.p>
                </motion.div>
            </div>

            <motion.div
                className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[18rem] font-black text-white/[0.02] pointer-events-none select-none z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" as const }}
            >
                <div className="italic text-center leading-[1] tracking-tighter">
                    <span>FPTU 20
                        <br />
                        OPEN 26</span>
                </div>
            </motion.div>
        </footer>
    )
}
