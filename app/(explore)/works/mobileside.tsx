'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"


const links=[
    {
      label: 'Depo',
      path: '/works/depo',
      icon: "/logo.png"
    },
    {
      label: 'AiSaas',
      path: '/',
      icon: "/logo.png"
    },
    {
      label: 'Dark',
      path: '/',
      icon: "/logo.png"
    },
    {
      label: 'Light',
      path: '/',
      icon: "/logo.png"
    },
    {
      label: 'Moderm',
      path: '/',
      icon: "/logo.png"
    },
  ]
const Mobileside = () => {
    const router = useRouter();
    const pathname = usePathname();
  return (
    <section className="lg:hidden  md:flex w-full  ">
      <div className=" fixed h-14 w-full backdrop-blur-lg rounded-lg">
        <div className="flex   ">
          <div className="container px-2 grid grid-cols-1 text-center">
            <div className="">
            <ul className='w-full  flex rounded-lg gap-4 items-center justify-center'>
            {links.map(link => {
            const isActive = pathname === link.path;
             return (
             <li key={`${link.label}-${link.path}`} 
             className='w-full bg-white/10 mt-5   hover:bg-white/25 transition     rounded-lg'>
            <Link className={isActive ? 
             'color-white bg-white/15 rounded-lg  ' : 'text-center w-full'} 
            href={link.path}>
              { link.label }
            </Link>
          </li>
        )
      })}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mobileside
