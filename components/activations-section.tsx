"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef, useEffect } from "react"
import { Crown } from "lucide-react"
import confetti from "canvas-confetti"

// --- Custom Medal Icons ---

const GoldMedal = () => (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF7AD" />
                <stop offset="30%" stopColor="#FFD700" />
                <stop offset="70%" stopColor="#FFA500" />
                <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
            <linearGradient id="ribbonGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FACC15" />
                <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        {/* Ribbons */}
        <path d="M60 140 L40 220 L75 195 L110 220 L90 140" fill="url(#ribbonGold)" stroke="#B45309" strokeWidth="2" />
        <path d="M140 140 L160 220 L125 195 L90 220 L110 140" fill="url(#ribbonGold)" stroke="#B45309" strokeWidth="2" />

        {/* Medal Body */}
        <circle cx="100" cy="100" r="75" fill="url(#goldGradient)" stroke="#B45309" strokeWidth="3" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#B45309" strokeWidth="2" strokeDasharray="5 5" opacity="0.6" />
        <circle cx="100" cy="100" r="50" fill="#FFF7AD" opacity="0.3" filter="url(#glow)" />

        {/* Text */}
        <text x="100" y="115" fontSize="60" fontWeight="900" textAnchor="middle" fill="#B45309" style={{ fontFamily: 'serif' }}>
            1<tspan fontSize="30" dy="-25">ST</tspan>
        </text>

        {/* Stars */}
        <path d="M100 35 L105 45 L115 45 L108 52 L110 62 L100 56 L90 62 L92 52 L85 45 L95 45 Z" fill="#B45309" />
    </svg>
)

const SilverMedal = () => (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        <defs>
            <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="30%" stopColor="#E0E0E0" />
                <stop offset="70%" stopColor="#9E9E9E" />
                <stop offset="100%" stopColor="#757575" />
            </linearGradient>
            <linearGradient id="ribbonSilver" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D1D5DB" />
                <stop offset="100%" stopColor="#6B7280" />
            </linearGradient>
        </defs>
        {/* Ribbons */}
        <path d="M60 140 L40 220 L75 195 L110 220 L90 140" fill="url(#ribbonSilver)" stroke="#4B5563" strokeWidth="2" />
        <path d="M140 140 L160 220 L125 195 L90 220 L110 140" fill="url(#ribbonSilver)" stroke="#4B5563" strokeWidth="2" />

        {/* Medal Body */}
        <circle cx="100" cy="100" r="75" fill="url(#silverGradient)" stroke="#4B5563" strokeWidth="3" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#4B5563" strokeWidth="2" strokeDasharray="5 5" opacity="0.6" />

        {/* Text */}
        <text x="100" y="115" fontSize="60" fontWeight="900" textAnchor="middle" fill="#4B5563" style={{ fontFamily: 'serif' }}>
            2<tspan fontSize="30" dy="-25">ND</tspan>
        </text>
    </svg>
)

const BronzeMedal = () => (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        <defs>
            <linearGradient id="bronzeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD8BE" />
                <stop offset="30%" stopColor="#CD7F32" />
                <stop offset="70%" stopColor="#A0522D" />
                <stop offset="100%" stopColor="#8B4513" />
            </linearGradient>
            <linearGradient id="ribbonBronze" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#9A3412" />
            </linearGradient>
        </defs>
        {/* Ribbons */}
        <path d="M60 140 L40 220 L75 195 L110 220 L90 140" fill="url(#ribbonBronze)" stroke="#7C2D12" strokeWidth="2" />
        <path d="M140 140 L160 220 L125 195 L90 220 L110 140" fill="url(#ribbonBronze)" stroke="#7C2D12" strokeWidth="2" />

        {/* Medal Body */}
        <circle cx="100" cy="100" r="75" fill="url(#bronzeGradient)" stroke="#7C2D12" strokeWidth="3" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#7C2D12" strokeWidth="2" strokeDasharray="5 5" opacity="0.6" />

        {/* Text */}
        <text x="100" y="115" fontSize="60" fontWeight="900" textAnchor="middle" fill="#5D240E" style={{ fontFamily: 'serif' }}>
            3<tspan fontSize="30" dy="-25">RD</tspan>
        </text>
    </svg>
)


const prizes = [
    {
        icon: GoldMedal,
        title: "GIẢI NHẤT",
        amount: "5.000.000",
        currency: "VNĐ",
        extras: "+ Huy chương Vàng + Cúp Vô Địch",
        description: "Vinh quang dành cho nhà vô địch tuyệt đối.",
        color: "from-[#FFD700] to-[#FDB931]",
        shadow: "shadow-yellow-500/50",
    },
    {
        icon: SilverMedal,
        title: "GIẢI NHÌ",
        amount: "3.000.000",
        currency: "VNĐ",
        extras: "+ Huy chương Bạc",
        description: "Phần thưởng xứng đáng cho bản lĩnh kiên cường.",
        color: "from-[#E0E0E0] to-[#BDBDBD]",
        shadow: "shadow-gray-400/50",
    },
    {
        icon: BronzeMedal,
        title: "ĐỒNG GIẢI BA",
        amount: "1.000.000",
        currency: "VNĐ",
        extras: "+ Huy chương Đồng",
        description: "Ghi nhận nỗ lực không ngừng nghỉ.",
        color: "from-[#CD7F32] to-[#A0522D]",
        shadow: "shadow-orange-700/50",
    },
    {
        icon: Crown,
        title: "TỔNG GIẢI THƯỞNG",
        amount: "44.800.000",
        currency: "VNĐ",
        extras: "Bao gồm hiện vật & hiện kim",
        description: "Quy mô giải thưởng lớn nhất từ trước đến nay.",
        color: "from-[#1D6E58] to-[#144d3d]",
        shadow: "shadow-emerald-900/50",
        isTotal: true
    },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
}

export function ActivationsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            const end = Date.now() + 1500; // Fireworks for 1.5 seconds

            const colors = ['#FFD700', '#C0C0C0', '#cd7f32', '#1D6E58', '#FDD62B'];

            (function frame() {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0, y: 0.7 },
                    colors: colors,
                    zIndex: 9999
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1, y: 0.7 },
                    colors: colors,
                    zIndex: 9999
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());

            // Big burst at the end
            setTimeout(() => {
                confetti({
                    particleCount: 150,
                    spread: 100,
                    origin: { y: 0.6 },
                    colors: colors,
                    zIndex: 100
                });
            }, 1000);
        }
    }, [isInView])

    return (
        <section id="prizes" className="relative py-16 bg-white overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(29,110,88,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(29,110,88,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Glowing Orbs */}
            <motion.div
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FDD62B]/10 rounded-full blur-[120px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D6E58]/10 text-[#1D6E58] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase"
                    >
                        <Crown className="w-3.5 h-3.5" />
                        <span>Cơ cấu giải thưởng</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-black text-[#1D6E58] tracking-tighter mt-2 mb-4">
                        CHINH PHỤC <span className="text-[#FDD62B]">ĐỈNH CAO</span>
                    </h2>
                    <motion.p
                        className="text-base text-[#1D6E58]/70 font-medium max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Hệ thống giải thưởng hấp dẫn với tổng giá trị lên đến 44.800.000 VNĐ đang chờ đón những nhà vô địch.
                    </motion.p>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {prizes.map((prize, index) => (
                        <motion.div
                            key={prize.title}
                            variants={itemVariants}
                            whileHover={{
                                y: -15,
                                scale: 1.03,
                                transition: { type: "spring", stiffness: 300, damping: 20 },
                            }}
                            className={`group relative rounded-[1.5rem] p-5 lg:p-6 cursor-pointer overflow-hidden backdrop-blur-sm bg-white border border-[#1D6E58]/10 shadow-xl hover:${prize.shadow} transition-shadow duration-500 flex flex-col items-center text-center h-full`}
                        >
                            {/* Card Gradient Border/Glow on Hover */}
                            <motion.div
                                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${prize.color}`}
                                transition={{ duration: 0.4 }}
                            />

                            {/* Icon / Medal Render */}
                            <motion.div
                                className={`
                                    w-24 h-24 flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform duration-500
                                    ${prize.isTotal ? 'rounded-2xl shadow-lg bg-gradient-to-br from-[#1D6E58] to-[#144d3d]' : ''}
                                `}
                            >
                                {prize.isTotal ? (
                                    <Crown className="w-12 h-12 text-white" strokeWidth={1.5} />
                                ) : (
                                    <prize.icon />
                                )}
                            </motion.div>

                            <h3 className="text-xl font-black text-[#1D6E58] tracking-tight mb-1">
                                {prize.title}
                            </h3>

                            <div className="my-4 relative">
                                <motion.div
                                    className="text-2xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1D6E58] to-[#144d3d]"
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                >
                                    {prize.amount}
                                </motion.div>
                                <div className="text-xs font-bold text-[#1D6E58]/40 uppercase tracking-widest mt-1">
                                    {prize.currency}
                                </div>
                            </div>

                            <p className="text-sm font-bold text-[#FDD62B] bg-[#1D6E58] px-3 py-1 rounded-full mb-4 shadow-sm">
                                {prize.extras}
                            </p>

                            <p className="text-[#1D6E58]/60 text-sm leading-relaxed mt-auto">
                                {prize.description}
                            </p>

                            {/* Shine Effect */}
                            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
