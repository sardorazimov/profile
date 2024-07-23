"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function NavbarCenter() {
  const router = useRouter()
  return (
    <div className="relative w-full flex  ">
      <div className="fixed top-10 inset-x-0 max-w-screen-3xl z-50">
        <div className=" items-center justify-center w-full top-2">
          <div className="relative shadow-input flex justify-center space-x-4 px-8  dark:border-white/[0.2]">
            <div className="" onClick={() => router.push('/works')}>Works</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const router = useRouter()
  const [active, setActive] = useState<string | null>(null);
  return (
  
<nav className="w-full   flex">
   <div
      className={cn("fixed top-10 inset-x-0 max-w-screen-3xl z-50", className)}
    >
      <div className=" py-3 items-center justify-center w-full top-2">
         <div  className="  relative   dark:border-white/[0.2]  shadow-input flex justify-center space-x-4 px-8
         ">
          <Button ></Button>
         </div>
        </div>
    </div>

</nav>
 
  );
}
