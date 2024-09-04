import Link from "next/link"
import { TracingBeam } from "../ui/Tracking"
import Image from "next/image"
import { Hero } from "./Hero"
import { MacbookScrollDemo } from "./Macbook"
import { Animated } from "./Amazing"
import { TextEffect } from "./Text"
import { Bento } from "./Bento"


const Landing = () => {
    return (
        <div className="flex w-full h-full ">
            <TracingBeam className="px-6">
                <div className="max-w-screen-2xl mx-auto antialiased  relative">
                    <div className=" w-full ">
                      <Bento />  
                    </div >
                    <Hero />
                </div>
            </TracingBeam>
        </div>
    )
}

export default Landing
