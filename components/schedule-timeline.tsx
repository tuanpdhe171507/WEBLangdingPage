"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Clock,
    Calendar,
    MapPin,
    ChevronRight,
    Zap,
    Swords,
    Trophy,
    Sparkles,
    Flag,
    Utensils,
    Info
} from "lucide-react"

type ScheduleType = "match" | "ceremony" | "break" | "prep" | "special"

type ScheduleItem = {
    time: string
    title: string
    details?: string[]
    type: ScheduleType
    location?: string
}

type Session = {
    name: string
    icon: any
    items: ScheduleItem[]
}

type DaySchedule = {
    day: string
    date: string
    sessions: Session[]
}

const scheduleData: DaySchedule[] = [
    {
        day: "NGÀY 1",
        date: "VÒNG LOẠI & TỨ KẾT",
        sessions: [
            {
                name: "BUỔI SÁNG",
                icon: Zap,
                items: [
                    { time: "06:45", title: "Ổn định tổ chức & Kiểm tra", type: "prep" },
                    { time: "08:00", title: "LỄ KHAI MẠC", type: "ceremony", details: ["Chào cờ", "Phát biểu", "Tuyên thệ"] },
                    { time: "08:20", title: "Văn nghệ chào mừng", type: "special", details: ["Múa lân FCOC", "Vovinam"] },
                    { time: "09:00", title: "VÒNG LOẠI (1/16 & 1/8)", type: "match", details: ["Đội nam phong trào", "Đội nam nâng cao"], location: "Sân 1, 2, 3" },
                    { time: "12:00", title: "Nghỉ trưa", type: "break" }
                ]
            },
            {
                name: "BUỔI CHIỀU",
                icon: Swords,
                items: [
                    { time: "13:00", title: "Tiếp tục Vòng loại 1/8", type: "match", details: ["Đôi nam nữ", "Đôi nữ phong trào"] },
                    { time: "16:00", title: "VÒNG TỨ KẾT", type: "match", details: ["Tứ kết các nội dung"] },
                    { time: "19:00", title: "Công bố kết quả", type: "prep", details: ["Họp kỹ thuật"] }
                ]
            }
        ]
    },
    {
        day: "NGÀY 2",
        date: "BÁN KẾT & CHUNG KẾT",
        sessions: [
            {
                name: "BUỔI SÁNG",
                icon: Trophy,
                items: [
                    { time: "07:15", title: "Điểm danh & Khởi động", type: "prep" },
                    { time: "08:00", title: "VÒNG BÁN KẾT", type: "match", details: ["Bán kết 3 nội dung"] },
                    { time: "12:00", title: "Chuẩn bị Chung Kết", type: "break", details: ["Họp trọng tài", "Chuẩn bị trao giải"] }
                ]
            },
            {
                name: "BUỔI CHIỀU",
                icon: Sparkles,
                items: [
                    { time: "13:00", title: "CHUNG KẾT Đôi nữ", type: "match", location: "Sân TT" },
                    { time: "14:00", title: "CHUNG KẾT Đôi nam PT", type: "match", location: "Sân TT" },
                    { time: "15:00", title: "CHUNG KẾT Đôi nam NC", type: "match", location: "Sân TT" },
                    { time: "16:00", title: "CHUNG KẾT Đôi nam nữ", type: "match", location: "Sân TT" },
                    { time: "17:00", title: "BẾ MẠC & TRAO GIẢI", type: "ceremony" }
                ]
            }
        ]
    }
]

const TYPE_STYLES: Record<ScheduleType, string> = {
    match: "bg-red-50 text-red-700 border-red-100",
    ceremony: "bg-blue-50 text-blue-700 border-blue-100",
    break: "bg-amber-50 text-amber-700 border-amber-100",
    prep: "bg-slate-50 text-slate-700 border-slate-100",
    special: "bg-purple-50 text-purple-700 border-purple-100"
}

export function ScheduleTimeline() {
    const [activeDay, setActiveDay] = useState(0)

    return (
        <section id="schedule" className="relative py-16 bg-[#F0FDF4] overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Tech Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(29,110,88,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(29,110,88,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Glowing Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1D6E58]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FDD62B]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1D6E58]/20 shadow-sm mb-6"
                    >
                        <Calendar className="w-4 h-4 text-[#1D6E58]" />
                        <span className="text-[11px] font-bold tracking-widest text-[#1D6E58] uppercase">Official Schedule</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-black text-[#1D6E58] tracking-tight mb-4"
                    >
                        LỊCH TRÌNH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDD62B] to-[#eab308]">THI ĐẤU</span>
                    </motion.h2>
                </div>

                {/* Day Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex gap-4">
                        {scheduleData.map((data, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveDay(index)}
                                className={`
                                    relative px-6 py-3 rounded-2xl font-bold text-xs tracking-wide transition-all duration-300 min-w-[140px] group
                                    ${activeDay === index ? 'text-white shadow-xl scale-105' : 'text-[#1D6E58]/60 hover:text-[#1D6E58] bg-white/50 hover:bg-white'}
                                `}
                            >
                                {activeDay === index && (
                                    <motion.div
                                        layoutId="tab-bg"
                                        className="absolute inset-0 bg-[#1D6E58] rounded-2xl"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex flex-col items-center">
                                    <span className="text-lg font-black">{data.day}</span>
                                    <span className={`text-[10px] font-mono mt-1 ${activeDay === index ? 'opacity-80' : 'opacity-60'}`}>{data.date}</span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Two Column Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeDay}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid lg:grid-cols-2 gap-8"
                    >
                        {scheduleData[activeDay].sessions.map((session, sIdx) => (
                            <motion.div
                                key={sIdx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: sIdx * 0.1 }}
                                className="bg-white/90 backdrop-blur-xl border border-white rounded-[32px] p-2 shadow-2xl shadow-[#1D6E58]/5 flex flex-col h-full"
                            >
                                {/* Session Header */}
                                <div className="p-6 pb-2 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#1D6E58] flex items-center justify-center text-white shadow-lg shadow-[#1D6E58]/20">
                                        <session.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-[#1D6E58]">{session.name}</h3>
                                        <div className="h-1 w-20 bg-gradient-to-r from-[#FDD62B] to-transparent rounded-full mt-1" />
                                    </div>
                                </div>

                                {/* Items List */}
                                <div className="p-4 flex-1 space-y-3">
                                    {session.items.map((item, iIdx) => (
                                        <motion.div
                                            key={iIdx}
                                            whileHover={{ x: 4, scale: 1.01 }}
                                            className={`
                                                relative p-4 rounded-2xl border transition-all duration-300 group
                                                bg-white border-slate-100 hover:border-[#1D6E58]/20 hover:shadow-lg
                                            `}
                                        >
                                            <div className="flex items-start gap-4">
                                                {/* Time Badge */}
                                                <div className="shrink-0">
                                                    <span className="inline-block px-3 py-1 rounded-lg bg-[#1D6E58]/5 text-[#1D6E58] font-mono text-sm font-bold border border-[#1D6E58]/5">
                                                        {item.time}
                                                    </span>
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${TYPE_STYLES[item.type]}`}>
                                                            {item.type === 'match' ? 'Thi Đấu' :
                                                                item.type === 'ceremony' ? 'Sự Kiện' :
                                                                    item.type === 'break' ? 'Nghỉ' :
                                                                        item.type === 'special' ? 'Đặc Biệt' : 'Chuẩn Bị'}
                                                        </span>
                                                        {item.location && (
                                                            <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                                                                <MapPin className="w-3 h-3" />
                                                                {item.location}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <h4 className="text-base font-bold text-slate-800 leading-tight group-hover:text-[#1D6E58] transition-colors">
                                                        {item.title}
                                                    </h4>

                                                    {item.details && (
                                                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                                                            {item.details.map((d, dIdx) => (
                                                                <div key={dIdx} className="text-xs text-slate-500 flex items-center gap-1">
                                                                    <div className="w-1 h-1 rounded-full bg-[#FDD62B]" />
                                                                    <span>{d}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
