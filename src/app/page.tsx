'use client'

import { VOSVODCards } from "@/components/about"
import { RescueBentoGrid } from "@/components/flot"
import Footer from "@/components/footer"
import {Hero} from "@/components/hero"
import { ThreeDCardDemo } from "@/components/service"
import BridgeTeamRescuers from "@/components/ui/rescuelist"

export default function Home() {
    return (
        <>
            <main className="w-screen h-full">
                <Hero/>
                <ThreeDCardDemo/>
                <VOSVODCards/>
                <RescueBentoGrid/>
                <BridgeTeamRescuers/>
                <Footer/>
            </main>
        </>
    )
}