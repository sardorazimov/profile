import Logo from "./Logo"
import { NavbarCenter } from "./Navbar"
import Navigation from "./Navigation"
import { Right } from "./Right"



const Header = () => {
  return (
    <header className=" py-4 bg-black border-b px-4 lg:px-8 border-neutral-700 pb-1 fixed w-full z-50
     md:gap-1
    ">
      <div className="max-w-screen-2xl  ">
        <div className="flex justify-between ">
          <Logo />
          <Right/>
        </div>
       <NavbarCenter />
      </div>
    </header>
  )
}

export default Header
