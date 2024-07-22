"use client"
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useMedia } from "react-use";
import NavButtuns from "./Nav";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import navlinks from "@/config/route";



const  Navigation = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [ isOpen, setIsopen ] =  useState(false);
    const isMobile = useMedia("(max-width:1024px)", false);
    const onClick = (href:string) => {
        router.push(href);
        setIsopen(false)
    }
    if(isMobile){
        return(
            <Sheet open={isOpen} onOpenChange={setIsopen} >
                <SheetTrigger>
                    <Button
                    variant={'outline'}
                    size={'sm'}
                    className=" font-mono bg-white/10 hover:bg-white/20 hover:text-white
                     border-none focus-visible:ring-offset-0 focus-visible:ring-transparent 
                     outline-none text-white focus:bg-white/30 transition"
                    >
                    <Menu  className="" />
                    </Button>
                </SheetTrigger>
                <SheetContent side={'left'} className="px-2">
                    <nav className="flex flex-col gap-y-2 pt-6">
                        {navlinks.map((nav) =>(
                            <Button key={nav.href}
                            variant={nav.href === pathname ? 'secondary' : 'ghost'}
                            onClick={() => onClick(nav.href)}
                            >
                                {nav.label}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        )
     }
  return (
    <nav className="hidden lg:flex gap-x-2 overflow-x-auto">
    {navlinks.map((nav) => (
        <NavButtuns 
         key={nav.href}
         href={nav.href}
         label={nav.label}
         isActive={pathname === nav.href}
        />
    ))}
</nav>
  )
}

export default Navigation
