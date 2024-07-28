"use client"
/* eslint-disable @next/next/no-img-element */
import Explorecard from "@/components/cards/explorecard"
import { Gemini } from "@/components/ExploreSet/Gemini"
import Gradatient from "@/components/ExploreSet/Gradatient"
import { Icons } from "@/components/ExploreSet/Icons"
import Number from "@/components/ExploreSet/Number"
import NumberTicker from "@/components/magicui/number-ticker"
import Ripple from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button"
import { Download, MoveDown } from "lucide-react"



const page = () => {
  return (
    
    <main className="flex w-full h-full flex-col ">
      <div className="w-full h-screen flex flex-col">
        <div className="w-full ">
          <h1 className="text-center font-bold text-8xl ">
            Lorem ipsum dolor sit amet.
          </h1>
          <div className="relative flex h-[850px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
            <p className="text-3xl font-bold text-white ">
               <NumberTicker value={40000} /> 
            </p>
          
            {/* <Button className="z-10 whitespace-pre-wrap text-center ">
              <MoveDown />
            </Button> */}
            <Ripple />
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

          <Gemini />
        </div>
      </div>
    </main>
  )
}

export default page
