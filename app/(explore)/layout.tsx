import Header from "@/components/Headers/Header"
import { NavbarCenter } from "@/components/Headers/Navbar"
import Landing from "@/components/Pages/Landing"


const Explorelayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
        <div className=" py-6 mx-auto">
            <Header />
        </div>
        <Landing />
      {children}
    </main>
  )
}

export default Explorelayout
