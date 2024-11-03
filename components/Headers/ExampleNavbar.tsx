"us clinet"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'


const ExampleNavbar = () => {
    return (
        <nav className="max-w-7xl  fixed top-4  mx-auto inset-x-0 z-50 w-[95%] lg:w-full" >
            <div className="hidden lg:block w-full">
                <div className="w-full flex relative justify-between px-4 py-2 rounded-full transition duration-200 bg-neutral-50 dark:bg-neutral-900 shadow-[0px_-2px_0px_0px_var(--neutral-100),0px_2px_0px_0px_var(--neutral-100)] dark:shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]">
                    <div className="absolute inset-0 h-full w-full bg-neutral-100 dark:bg-neutral-800 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent,white)] rounded-full" >
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <a className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20" href="/">
                            <img src='/svg/logo.svg'  className="h-6 w-8 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
                            
                            <span className="font-medium text-white">Azimov</span>
                        </a>
                        <div className="flex items-center gap-1.5">
                            <a className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 text-neutral-200" href="/works">Works</a>
                            <a className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 text-neutral-200" href="/hoby">Hoby</a>
                            <a className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 text-neutral-200" href="/example">Explore</a>
                            {/* <a className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 text-neutral-200" href="https://dahboard-azimov.vercel.app/">Dashboard</a>
                            <a className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 text-neutral-200" href="/spline">Spline</a> */}
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <button className="w-10 h-10 flex hover:bg-gray-50 dark:hover:bg-white/[0.1] rounded-lg items-center justify-center outline-none focus:ring-0 focus:outline-none active:ring-0 active:outline-none overflow-hidden">
                            <div >{/***
                             * 
                             * 
                             */}</div><span className="sr-only">Toggle theme</span>
                        </button>
                        <a className="relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl" href="/login">Login</a>
                        <a className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]" href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
            <div className="flex h-full w-full items-center lg:hidden ">
                <div className="flex justify-between items-center w-full rounded-full px-2.5 py-1.5 transition duration-200 bg-neutral-50 dark:bg-neutral-900 shadow-[0px_-2px_0px_0px_var(--neutral-100),0px_2px_0px_0px_var(--neutral-100)] dark:shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]">
                    <a className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20" href="/">
                    <img src="/svg/logo.svg" className="h-5 w-6   rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
                    <span className="font-medium text-white">Azimov</span>
                    </a>
                   {/* Mobilr */}
                </div>
            </div>
        </nav>
    )
}

export default ExampleNavbar