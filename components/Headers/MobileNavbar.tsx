"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useRouter } from "next/navigation"
import { BiMenuAltRight } from "react-icons/bi";


// type SheetSide = (typeof SHEET_SIDES)[number]

export function MobileNavbar() {
    const router  = useRouter();
  return (
    <div className="">
        <Sheet  >
          <SheetTrigger asChild className="border-white/10 border">
          <BiMenuAltRight size={27} />
          </SheetTrigger>
          <SheetContent side={'right'}>
            <SheetHeader>
              <SheetTitle>Logo</SheetTitle>
              <SheetDescription>
                Make changes
              </SheetDescription>
            </SheetHeader>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-3">
            <Button className="bg-white/5 text-white hover:bg-white/10  " >Soon</Button>
              <Button className="bg-white/5 text-white hover:bg-white/10" >Sonn</Button>
              <Button onClick={() => router.push('/explore')}
                className="bg-white/5 text-white hover:bg-white/10" >Explore</Button>
              <Button onClick={() => router.push('/example')} 
               className="bg-white/5 text-white hover:bg-white/10" >Exmple</Button>
              <Button onClick={() => router.push('/works')}
               className="bg-white/5 text-white hover:bg-white/10" >Works</Button>
          </div>
            <SheetFooter className="mt-20">
              <SheetClose asChild>
                {/* <Button >Save changes</Button> */}
                {/* Logo */}
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      
    </div>
  )
}
