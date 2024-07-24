/* eslint-disable @next/next/no-img-element */
import Explorecard from "@/components/cards/explorecard"
import { HeroScrollDemo } from "@/components/ExploreSet/Hero"
import { Icons } from "@/components/ExploreSet/Icons"
import { Sticky } from "@/components/ExploreSet/Sticky"
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card"
import ShineBorder from "@/components/magicui/shine-border"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Button } from "@/components/ui/button"
import PulsatingButton from "@/components/ui/pulsating-button"
import Image from "next/image"


const page = () => {
  const animejs = [
    {

    }
  ]
  return (
    <main className="flex w-full h-full flex-col ">
      <div className="w-full h-screen flex flex-col">
        <div className="text-[12rem] items-center justify-center flex w-full py-3 font-bold">
          Works
        </div>
        <div className="w-full h-full">
          <div className="flex justify-between">
            <Sticky />
            <div className="w-full mx-auto">
              
              < >
                <div className="">
                 <Explorecard /> 
                 <h1>Comming Soon</h1>
                </div>
               
              </>
            </div>
            {/* <NeonGradientCard className="max-w-sm my-12 mx-auto items-center justify-center text-center">
              <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                Neon Gradient Card
              </span>
            </NeonGradientCard> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
