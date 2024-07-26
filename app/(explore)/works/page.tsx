"use client"
/* eslint-disable @next/next/no-img-element */
import Explorecard from "@/components/cards/explorecard"
import { Gemini } from "@/components/ExploreSet/Gemini"
import Gradatient from "@/components/ExploreSet/Gradatient"
import { Icons } from "@/components/ExploreSet/Icons"
import Number from "@/components/ExploreSet/Number"
import { Text } from "@/components/ExploreSet/Text"
import Video from "@/components/ExploreSet/Video"
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card"



const page = () => {
  return (
    <main className="flex w-full h-full flex-col ">
      <div className="w-full h-screen flex flex-col">
        <div className="grid gris-cols-1 md:gris-cols-3 ">
          <div className=" flex flex-col gap-x-10 "> 
            <NeonGradientCard className="max-w-sm my-12 mx-auto items-center justify-center text-center">
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                Neon Gradient Card
            </span>
            </NeonGradientCard>
           <Video />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  max-w-screen-xl gap-x-4 mx-1">
          <div className="">
            <Explorecard /> 
          </div>
          <div>
           <Gradatient /> 
          </div>
          <div>
            <Icons />
          </div>
        </div>
        <div className="border-b w-full flex items-center justify-center text-bold border-transparent " >
           <h1 className="text-5xl"> Coming Soon</h1>
        </div>
        
        <div className="blur-md cursor-not-allowed">
          
          <Gemini  />
        </div>
      </div>
    </main>
  )
}

export default page
