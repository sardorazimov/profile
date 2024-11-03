
import StickyHeader from "@/components/Headers/Header"
import Header from "@/components/Headers/Header"

import Landing from "@/components/Pages/Landing"


const Explorelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="  mx-auto">
        <StickyHeader />
      </div>
      {children}
    </main>
  )
}

export default Explorelayout
