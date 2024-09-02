'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface WorkSidebarProps{
  icon: string
}

const links=[
  {
    label: 'GitHub Depo',
    path: '/works/depo',
    icon: "/logo.png"
  },
  {
    label: 'AiSaas',
    path: '/',
    icon: "/logo.png"
  },
  {
    label: 'Dark Saas',
    path: '/',
    icon: "/logo.png"
  },
  {
    label: 'Light Saas',
    path: '/',
    icon: "/logo.png"
  },
  {
    label: 'Moderm',
    path: '/',
    icon: "/logo.png"
  },
  // {
  //   label: 'Page 2',
  //   path: '/',
  // },
  // {
  //   label: 'Page 1',
  //   path: '/',
  // },
  // {
  //   label: 'Page 2',
  //   path: '/',
  //   icon: "/logo.png"
  // },
]

const WorkSidebar = ({icon:Icon}:WorkSidebarProps) => {
  const router = useRouter();
  const pathname = usePathname()
  return (
    <aside className='relative '>
      <div className='fixed flex-col w-44 h-screen border-r-2 border-neutral-800 '>
        <div className='flex '>
          <div className='flex w-full items-center'>
            <ul className='w-full  flex flex-col rounded-lg gap-y-7'>
            {links.map(link => {
            const isActive = pathname === link.path;
             return (
             <li key={`${link.label}-${link.path}`} 
             className='w-full items-center flex justify-center gap-x-10 hover:bg-muted rounded-lg'>
            <Link className={isActive ? 
             'color-white bg-white/15 w-full rounded-lg items-center justify-center flex ' : ''} 
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
    </aside>
  )
}

export default WorkSidebar
