
import greensvg from "@/public/green.svg"


const page = () => {
  return (
    <section className="py-20 flex h-screen w-full"
    style={{
      backgroundImage: `url(${'/green.svg'})`,
    }}
    >
       <div className="container">
          <div className="">
            <h1 className="flex  items-center w-full justify-center text-center bg-gradient-to-b
             from-fuchsia-700 to-blue-700 text-transparent bg-clip-text
             text-8xl">
              Cooming Soon
            </h1>
            </div>
       </div>
    </section>
  )
}

export default page
