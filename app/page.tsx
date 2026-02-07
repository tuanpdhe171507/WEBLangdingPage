import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EventInfoBar } from "@/components/event-info-bar"
import { EventIntroduction } from "@/components/event-introduction"
import { TeamSection } from "@/components/team-section"
import { ScheduleTimeline } from "@/components/schedule-timeline"
import { ActivationsSection } from "@/components/activations-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <HeroSection />
            <EventInfoBar />
            <EventIntroduction />
            <TeamSection />
            <ScheduleTimeline />
            <ActivationsSection />
            <SponsorsSection />
            <SocialSection />
            <Footer />
        </main>
    )
}
