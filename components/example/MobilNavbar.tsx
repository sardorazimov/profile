'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"


const MobilNavbar = () => {
    const router = useRouter()
    return (
        <div className="">
            <DropdownMenu >
                <DropdownMenuTrigger>
                    <Menu />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-transparent border-neutral-500">
                    <DropdownMenuLabel className="">
                        <Link href={'/'}>
                         Azimov
                        </Link>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => router.push('/works')}>Works</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push('/hoby')}>Hoby</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push('/example')}>Explore</DropdownMenuItem>
                    
                    <DropdownMenuItem>
                        <Link href="https://dahboard-azimov.vercel.app/"></Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>H -Soon</DropdownMenuItem>
                    <DropdownMenuItem>E -Soon</DropdownMenuItem>
                    
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default MobilNavbar
