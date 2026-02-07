"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// --- Custom Tier Definitions with Local Images ---
const tiers = {
    diamond: {
        name: "Nhà Tài Trợ Kim Cương",
        color: "from-[#22d3ee] via-[#67e8f9] to-[#06b6d4]",
        border: "border-cyan-400/50 group-hover:border-cyan-400",
        shadow: "shadow-[0_8px_32px_rgba(6,182,212,0.25)] group-hover:shadow-[0_8px_40px_rgba(6,182,212,0.45)]",
        image: "/images/diamond.png"
    },
    gold: {
        name: "Nhà Tài Trợ Vàng",
        color: "from-[#fbbf24] via-[#fcd34d] to-[#d97706]",
        border: "border-yellow-400/50 group-hover:border-yellow-400",
        shadow: "shadow-[0_8px_32px_rgba(251,191,36,0.25)] group-hover:shadow-[0_8px_40px_rgba(251,191,36,0.45)]",
        image: "/images/gold.png"
    },
    silver: {
        name: "Nhà Tài Trợ Bạc",
        color: "from-[#94a3b8] via-[#cbd5e1] to-[#64748b]",
        border: "border-slate-300/50 group-hover:border-slate-300",
        shadow: "shadow-[0_8px_32px_rgba(148,163,184,0.25)] group-hover:shadow-[0_8px_40px_rgba(148,163,184,0.45)]",
        image: "/images/silver.png"
    },
    bronze: {
        name: "Nhà Tài Trợ Đồng",
        color: "from-[#fdba74] via-[#ffedd5] to-[#ea580c]",
        border: "border-orange-400/50 group-hover:border-orange-400",
        shadow: "shadow-[0_8px_32px_rgba(234,88,12,0.25)] group-hover:shadow-[0_8px_40px_rgba(234,88,12,0.45)]",
        image: "/images/dong.png"
    }
}

const sponsors = [
    { ...tiers.diamond, name: "TechGiant Corp", description: "Tiên phong công nghệ, kiến tạo tương lai số với các giải pháp AI đột phá hàng đầu thế giới." },
    { ...tiers.gold, name: "Future Finance", description: "Đối tác tài chính tin cậy, mang đến các giải pháp đầu tư an toàn và hiệu quả cho mọi doanh nghiệp." },
    { ...tiers.gold, name: "Elite Sports", description: "Thương hiệu thể thao đẳng cấp, đồng hành cùng sức mạnh và bản lĩnh của các vận động viên." },
    { ...tiers.silver, name: "Global Soft", description: "Cung cấp nền tảng phần mềm toàn diện, tối ưu hóa quy trình vận hành cho doanh nghiệp." },
    { ...tiers.silver, name: "InnoVate", description: "Sáng tạo không ngừng, mang đến những ý tưởng và sản phẩm công nghệ độc đáo." },
    { ...tiers.bronze, name: "NextGen Drink", description: "Năng lượng bứt phá cho thế hệ mới, đánh thức mọi giác quan." },
    { ...tiers.bronze, name: "Hyper Gear", description: "Trang thiết bị hiện đại, nâng tầm trải nghiệm của bạn trong mọi hành trình." },
    { ...tiers.bronze, name: "Urban Wear", description: "Phong cách thời trang đô thị năng động, thể hiện cá tính riêng biệt." },
]

export function SponsorsSection() {
    return (
        <section id="sponsors" className="relative py-20 bg-[#F0FDF9] overflow-hidden perspective-2000">
            {/* Soft Brand Background */}
            <div className="absolute inset-0 bg-[#F0FDF9]">
                {/* Brand Green Radial */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,110,88,0.08)_0%,transparent_70%)]" />

                {/* Subtle Brand Blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1D6E58]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FDD62B]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#1D6E58] font-mono tracking-[0.2em] text-sm uppercase mb-4 block glow-text">
                        Đơn Vị Đồng Hành
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#1D6E58] tracking-tighter uppercase">
                        NHÀ TÀI TRỢ
                    </h2>
                </motion.div>

                {/* 3D Rotating Sphere/Cylinder */}
                <RotatingSponsors />
            </div>
        </section>
    )
}

import { useState, useRef } from "react"
import { useMotionValue, useAnimationFrame } from "framer-motion"

function RotatingSponsors() {
    // Number of cards
    const N = sponsors.length;
    // Radius of the carousel
    const radius = 400;

    // Animation Controls
    const rotation = useMotionValue(0);
    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Speed of rotation
    const speed = 0.1; // degrees per frame (approx)

    useAnimationFrame((t, delta) => {
        if (!isPaused) {
            const newRotation = rotation.get() + (delta * 0.01); // Adjust speed factor here
            rotation.set(newRotation);
        }
    });

    const handleCardClick = (index: number) => {
        if (activeIndex === index) {
            // Unflip and resume
            setActiveIndex(null);
            setIsPaused(false);
        } else {
            // Flip and pause
            setActiveIndex(index);
            setIsPaused(true);
        }
    }

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center [perspective:1500px] overflow-visible">
            {/* The Rotating Container */}
            <motion.div
                className="relative w-full h-full [transform-style:preserve-3d]"
                style={{ rotateY: rotation }}
            >
                {sponsors.map((sponsor, i) => {
                    const angle = (360 / N) * i;
                    const isActive = activeIndex === i;

                    return (
                        <div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-[220px] h-[300px] -ml-[110px] -mt-[150px]"
                            style={{
                                transform: `rotateY(${angle}deg) translateZ(${radius}px)`
                            }}
                            onClick={() => handleCardClick(i)}
                        >
                            {/* 3D Card Construction */}
                            <motion.div
                                className={`
                                    group w-full h-full relative [transform-style:preserve-3d] transition-all duration-700 cursor-pointer
                                `}
                                animate={{ rotateY: isActive ? 180 : 0 }}
                            >
                                {/* Front Face */}
                                <div className={`
                                    absolute inset-0 rounded-2xl border ${sponsor.border}
                                    bg-gradient-to-br from-white/80 to-white/40
                                    flex flex-col items-center justify-center p-1
                                    [backface-visibility:hidden]
                                    ${sponsor.shadow}
                                    backdrop-blur-xl
                                `}>
                                    {/* Inner Frame */}
                                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/60 to-transparent border border-white/50 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-white/40 transition-colors">

                                        {/* Tier Accent Top Bar */}
                                        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${sponsor.color}`} />

                                        {/* Dynamic Shine */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent translate-x-[-150%] group-hover:animate-shine duration-1000 z-20" />

                                        {/* Logo Container - Floating Effect */}
                                        <div className="w-40 h-40 mb-4 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-500 drop-shadow-md">
                                            <Image
                                                src={sponsor.image}
                                                alt={sponsor.name}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>

                                        {/* Text Info */}
                                        <div className="relative z-10 text-center px-4">
                                            <h3 className="text-lg font-black text-[#1D6E58] uppercase tracking-wide leading-tight mb-3">
                                                {sponsor.name}
                                            </h3>

                                            {/* Tier Badge Pill */}
                                            <div className={`
                                                inline-block px-4 py-1.5 rounded-full 
                                                bg-gradient-to-r ${sponsor.color} 
                                                shadow-sm border border-white/50
                                            `}>
                                                <p className="text-[10px] font-black text-[#1D6E58] uppercase tracking-[0.2em] leading-none">
                                                    {sponsor.image.includes("diamond") ? "KIM CƯƠNG" :
                                                        sponsor.image.includes("gold") ? "VÀNG" :
                                                            sponsor.image.includes("silver") ? "BẠC" : "ĐỒNG"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div className={`
                                    absolute inset-0 rounded-2xl border ${sponsor.border}
                                    bg-gradient-to-br from-white/95 to-white/80
                                    flex flex-col items-center justify-center p-6 text-center
                                    [backface-visibility:hidden] [transform:rotateY(180deg)]
                                    ${sponsor.shadow}
                                    backdrop-blur-xl
                                `}>
                                    <h3 className="text-lg font-black text-[#1D6E58] uppercase mb-4 relative">
                                        Giới Thiệu
                                        <span className={`block w-12 h-1 bg-gradient-to-r ${sponsor.color} mx-auto mt-2 rounded-full`} />
                                    </h3>

                                    <p className="text-[#1D6E58]/80 text-sm font-medium leading-relaxed">
                                        {sponsor.description}
                                    </p>

                                    <div className={`mt-6 px-4 py-2 rounded-lg bg-gradient-to-r ${sponsor.color} text-[#1D6E58] text-xs font-bold uppercase tracking-wider`}>
                                        Nhà Tài Trợ
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}
