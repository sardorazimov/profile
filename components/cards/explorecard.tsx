"use client"

import React from 'react'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const Explorecard = () => {
    const router = useRouter()
  return (
    <div className='relative'>
       <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Image Generation
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Generate AI art with our free AI image generator.
           Create unlimited AI illustrations. With over 100+ models and styles to choose from, you can create stunning images, videos
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/anime.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex w-full  mt-20">
          <Button className='w-full' 
           onClick={() => router.push('/imagegen')}
          >
            Generate
          </Button>
          <h1></h1>
        </div>
      </CardBody>
    </CardContainer>
    </div>
  )
}

export default Explorecard
