"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Users, ShieldCheck, Sparkles, FileText } from "lucide-react"

const team = [
    {
        role: "Giảng viên đồng hành",
        name: "Phạm Đức Chính",
        featured: true,
    },
    {
        role: "Trưởng ban tổ chức",
        name: "Nguyễn Đức Anh",
        featured: true,
    },
    {
        role: "Trưởng Ban HR",
        name: "Đỗ Khánh Linh, Nguyễn Thúy Hà",
        featured: false,
    },
    {
        role: "Trưởng Ban Design",
        name: "Đỗ Thái Hà An, Nguyễn Đình Hoàng Đăng",
        featured: false,
    },
    {
        role: "Trưởng Ban Đối ngoại",
        name: "Nguyễn Minh Triết, Lê Thanh Xuân",
        featured: false,
    },
    {
        role: "Trưởng Ban Truyền thông",
        name: "Nguyễn Hoàng Giang",
        featured: false,
    },
    {
        role: "Trưởng Ban Take Care",
        name: "Lê Thanh Xuân",
        featured: false,
    },
    {
        role: "Trưởng Ban Nội Dung",
        name: "Nguyễn Hoàng Giang",
        featured: false,
    },
    {
        role: "Trưởng Ban Hậu Cần",
        name: "Nguyễn Thúy Hà",
        featured: false,
    },
    {
        role: "Trưởng Ban Trọng Tài",
        name: "Nguyễn Thúy Hà",
        featured: false,
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1] as const
        }
    }
}

export function TeamSection() {
    return (
        <section id="team" className="relative py-16 bg-[#F0FDF4] overflow-hidden">
            {/* Background Decorative Elements */}
            <motion.div
                className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1D6E58]/5 rounded-full blur-[80px]"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="inline-flex items-center gap-1.5 bg-[#1D6E58]/10 text-[#1D6E58] px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] mb-3"
                    >
                        <Sparkles className="w-2.5 h-2.5 fill-current" />
                        ORGANIZING TEAM
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-3xl md:text-4xl font-black text-[#1D6E58] tracking-tight"
                    >
                        ĐỘI NGŨ <span className="text-[#FDD62B]">TỔ CHỨC</span>
                    </motion.h2>
                </div>

                {/* Leadership Section */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {team.filter(m => m.featured).map((member, i) => (
                        <motion.div
                            key={member.name}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ y: -5 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="relative group cursor-default h-full"
                        >
                            <div className="relative bg-white border border-[#1D6E58]/10 rounded-3xl p-6 min-w-[280px] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                                <motion.div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg relative"
                                    animate={{
                                        backgroundColor: ["#1D6E58", "#144d3d", "#1D6E58"],
                                        boxShadow: [
                                            "0 0 0px rgba(253, 214, 43, 0)",
                                            "0 0 20px rgba(253, 214, 43, 0.5)",
                                            "0 0 0px rgba(253, 214, 43, 0)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <motion.div
                                        animate={{
                                            color: ["#FDD62B", "#ffffff", "#FDD62B"],
                                            filter: [
                                                "drop-shadow(0 0 0px rgba(253, 214, 43, 0))",
                                                "drop-shadow(0 0 8px rgba(253, 214, 43, 0.8))",
                                                "drop-shadow(0 0 0px rgba(253, 214, 43, 0))"
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <ShieldCheck className="w-6 h-6" />
                                    </motion.div>
                                </motion.div>
                                <h3 className="text-[#1D6E58]/60 font-mono text-[10px] font-bold uppercase tracking-widest mb-1">{member.role}</h3>
                                <p className="text-lg font-black text-[#1D6E58] leading-tight">{member.name}</p>

                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#FDD62B] rounded-t-full scale-x-0 group-hover:scale-x-100 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Departments Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {team.filter(m => !m.featured).map((member, i) => (
                        <motion.div
                            key={member.role}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="group h-full"
                        >
                            <div className="relative bg-white/60 backdrop-blur-sm border border-white/40 p-4 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all h-full flex flex-col">
                                <div className="flex items-center gap-3 mb-2">
                                    <motion.div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 relative overflow-hidden"
                                        animate={{
                                            backgroundColor: ["#FDD62B", "#ffeba0", "#FDD62B"],
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-white/30"
                                            animate={{
                                                x: ["-100%", "100%"]
                                            }}
                                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
                                        />
                                        <Users className="w-4 h-4 text-[#1D6E58] relative z-10" />
                                    </motion.div>
                                    <h4 className="text-[9px] font-black text-[#1D6E58]/50 uppercase tracking-widest leading-none">{member.role}</h4>
                                </div>
                                <p className="text-sm font-bold text-[#1D6E58] leading-tight flex-grow">
                                    {member.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Competition Rules Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="flex justify-center mt-12"
                >
                    <Link
                        href="https://docs.google.com/document/d/1MW980VEdqcmZZXH0CIe-aCdgKHeO1yHin6hopaENRxc/edit?hl=vi&tab=t.0"
                        target="_blank"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#1D6E58] text-[#FDD62B] rounded-full font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:bg-[#144d3d] hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#1D6E58]/30"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FDD62B]/20 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                        <FileText className="w-5 h-5" />
                        <span>Xem Luật Thi Đấu Chi Tiết</span>
                        <Sparkles className="w-4 h-4 text-[#FDD62B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
