"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function EventInfoBar() {
    const [timeLeft, setTimeLeft] = useState({
        days: 24,
        hours: 2,
        minutes: 52,
        seconds: 50
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
                return prev
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative z-30 max-w-7xl mx-auto px-6">
            <div className="absolute top-0 left-6 right-6 -translate-y-1/2">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-[#1D6E58] rounded-3xl md:rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-white/10 flex flex-wrap items-center justify-between px-6 py-4 md:px-12"
                >
                    {/* Start Date */}
                    <div className="flex-1 min-w-[140px] px-4 md:px-6 border-r border-white/10 flex flex-col justify-center">
                        <p className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1 whitespace-nowrap">
                            BẮT ĐẦU LÚC 00:00
                        </p>
                        <p className="text-xl md:text-2xl font-black text-white tracking-tight">
                            02/02/2026
                        </p>
                    </div>

                    {/* End Date */}
                    <div className="flex-1 min-w-[140px] px-4 md:px-6 border-r border-white/10 flex flex-col justify-center">
                        <p className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1 whitespace-nowrap">
                            KẾT THÚC LÚC 00:00
                        </p>
                        <p className="text-xl md:text-2xl font-black text-white tracking-tight">
                            28/02/2026
                        </p>
                    </div>

                    {/* Countdown */}
                    <div className="flex-[2] flex items-center justify-around px-2 md:px-4 min-w-[280px]">
                        <div className="text-center flex-1">
                            <p className="text-xl md:text-3xl font-black text-white">
                                {timeLeft.days.toString().padStart(2, '0')}
                            </p>
                            <p className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-wider mt-0.5">NGÀY</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-center flex-1">
                            <p className="text-xl md:text-3xl font-black text-white">
                                {timeLeft.hours.toString().padStart(2, '0')}
                            </p>
                            <p className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-wider mt-0.5">GIỜ</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-center flex-1">
                            <p className="text-xl md:text-3xl font-black text-white">
                                {timeLeft.minutes.toString().padStart(2, '0')}
                            </p>
                            <p className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-wider mt-0.5">PHÚT</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-center flex-1">
                            <p className="text-xl md:text-3xl font-black text-white">
                                {timeLeft.seconds.toString().padStart(2, '0')}
                            </p>
                            <p className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-wider mt-0.5">GIÂY</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
