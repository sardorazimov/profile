import Header from "@/components/Headers/Header"
import { NavbarCenter } from "@/components/Headers/Navbar"
import Landing from "@/components/Pages/Landing"


const Explorelayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
        <div className="  mx-auto">
            <Header />
        </div>
        <div className="py-16">
         <Landing /> 
        </div>
        
      {children}
    </main>
  )
}

export default Explorelayout
