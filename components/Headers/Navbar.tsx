"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimationProps } from "framer-motion";
import ShinyButton from "../magicui/shiny-button";



export function NavbarCenter() {
  const router = useRouter()
  const animationProps = {
    initial: { "--x": "100%", scale: 0.8 },
    animate: { "--x": "-100%", scale: 1 },
    whileTap: { scale: 0.95 },
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1,
      type: "spring",
      stiffness: 20,
      damping: 15,
      mass: 2,
      scale: {
        type: "spring",
        stiffness: 200,
        damping: 5,
        mass: 0.5,
      },
    },
  } as AnimationProps;
  return (
    <div className="relative w-full flex  ">
      <div className="fixed my-4 inset-x-0 max-w-screen-3xl z-50 cursor-pointer">
        <div className=" items-center justify-center w-full top-2">
          <div className="relative shadow-input flex justify-center space-x-4 px-8  dark:border-white/[0.2]">
            <div className="" onClick={() => router.push('/works')}>
              <ShinyButton  text="Works"/>
            </div>
            <div className=" " onClick={() => router.push('/example')}>
              <ShinyButton text="Explore" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


