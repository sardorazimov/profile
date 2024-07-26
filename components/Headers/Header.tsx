import Logo from "./Logo"
import { NavbarCenter } from "./Navbar"
import Navigation from "./Navigation"
import { Right } from "./Right"



const Header = () => {
  return (
    <header className=" bg-transparent border-b px-4 lg:px-8 border-neutral-700 z-50 fixed w-full  h-[4rem] 
    ">
      <div className="max-w-screen-2xl flex gap-x-1   ">
        <div className="max-w-sm flex my-3 ">
         <Logo/>
        </div>
        <nav className="flex justify-between w-full gap-2"> 
          <div className="max-w-sm mx-3 ">
          <NavbarCenter />
         </div>
         <div className="gap-3">
         
         </div> 
         </nav>  
        <div className="flex  my-2 ">
            {/* <Right /> */}
        </div>
      </div>

    </header>
  )
}

export default Header
