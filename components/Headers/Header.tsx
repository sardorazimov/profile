import Logo from "./Logo"
import { NavbarCenter } from "./Navbar"
import Navigation from "./Navigation"
import { Right } from "./Right"



const Header = () => {
  return (
    <header className=" bg-zinc-950 border-b px-4 lg:px-8 border-neutral-700 z-50 fixed w-full  h-[4rem] 
    ">
      <div className="max-w-screen-2xl flex gap-x-1   ">
        <div className="max-w-sm flex ">
         <Logo/>
        </div>
        <nav className="flex justify-between w-full"> 
        <div className="w-full">
        <NavbarCenter />
        </div>
        <div className=" px-3 ">
        </div> 
        </nav>  
        <div className="flex py-2 ">
           <Right />
        </div>
      </div>

    </header>
  )
}

export default Header
