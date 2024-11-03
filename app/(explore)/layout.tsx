import StickyHeader from "@/components/Headers/Header"

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
