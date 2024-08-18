"use client"
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { useOutsideClick } from "@/hooks/outside"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Heart, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useId, useRef, useState } from "react"





const Workspage = () => {

  return (

    <section className="w-full flex flex-col  ">
      <h1 className="font-bold lg:text-6xl text-xl  text-center ">
        More GitHub Cource code
      </h1>
      <div className="grid my-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 lg:gap-x-4 gap-y-5">
       <div className=" cursor-pointer lg:max-w-lg max-w-sm bg-blur border border-neutral-500 rounded-lg mx-3">
        <div className="relative py-12 px-2  mx-2">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ee6567181150297.6516c1727a80d.jpg"
           alt=""  className=" object-cover rounded-lg flex"/>
           <div className="flex w-full justify-between">
            <div>
                <h1 className="text-xl font-bold my-2">Music Web App</h1>
            </div>
            <div className="my-2">
              <Heart className="text-rose-500" />
            </div>
           </div>
           <>
             <p className="text-sm text-center">Music Web App Nextjs Vercel Tailwindcss and More Ui Components </p>
           </>
           <Link href={'https://github.com/sardorazimov/web_music'} className="flex">
           <Button className="w-full my-1 gap-1">GitHub Code <ArrowRight/> </Button>
           </Link>
        </div>
       </div>
       <div className="flex cursor-pointer lg:max-w-lg lg:max-h-auto max-w-sm bg-blur border border-neutral-500 rounded-lg mx-3">
        <div className="relative py-12 px-2  mx-2">
          <img src="https://mettlesoft.com.au/wp-content/uploads/2020/10/e-commerce-website.jpg"
           alt=""  className=" object-contain rounded-lg flex"/>
           <div className="flex w-full justify-between">
            <div>
                <h1 className="text-xl font-bold my-2">E Comerce</h1>
            </div>
            <div className="my-2">
              <Heart className="text-rose-500" />
            </div>
           </div>
           <>
             <p className="text-sm text-center">Music Web App Nextjs Vercel Tailwindcss and More Ui Components With Stripe</p>
           </>
           <Link href={'https://github.com/sardorazimov/e_commerce'} className="flex">
           <Button className="w-full my-1 gap-1">GitHub Code <ArrowRight/> </Button>
           </Link>
        </div>
       </div>
       <div className="flex cursor-not-allowed  lg:max-w-lg lg:max-h-auto max-w-sm bg-blur-lg border border-neutral-500 rounded-lg mx-3">
        <div className="relative py-12 px-2  mx-2">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ee6567181150297.6516c1727a80d.jpg"
           alt=""  className=" object-cover rounded-lg flex"/>
           <div className="flex w-full justify-between">
            <div>
                <h1 className="text-xl font-bold my-2">Music Web App</h1>
            </div>
            <div className="my-2">
              <Heart className="text-rose-500" />
            </div>
           </div>
           <>
             <p className="text-sm text-center">Music Web App Nextjs Vercel Tailwindcss and More Ui Components</p>
           </>
           <Link href={'https://github.com/sardorazimov/web_music'} className="flex">
           <Button className="w-full my-1 gap-1">GitHub Code <ArrowRight/> </Button>
           </Link>
        </div>
       </div>
       <div className="flex cursor-pointer lg:max-w-lg lg:max-h-auto max-w-sm bg-blur border border-neutral-500 rounded-lg mx-3">
        <div className="relative py-12 px-2  mx-2">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ee6567181150297.6516c1727a80d.jpg"
           alt=""  className=" object-cover rounded-lg flex"/>
           <div className="flex w-full justify-between">
            <div>
                <h1 className="text-xl font-bold my-2">Music Web App</h1>
            </div>
            <div className="my-2">
              <Heart className="text-rose-500" />
            </div>
           </div>
           <>
             <p className="text-sm text-center">Music Web App Nextjs Vercel Tailwindcss and More Ui Components</p>
           </>
           <Link href={'https://github.com/sardorazimov/web_music'} className="flex">
           <Button className="w-full my-1 gap-1">GitHub Code <ArrowRight/> </Button>
           </Link>
        </div>
       </div>
      </div>
    </section>
  )
}

export default Workspage
