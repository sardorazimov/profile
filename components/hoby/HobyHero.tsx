
import Saline from "../Spline/Sp";
import { ContainerScroll } from "../ui/container-scroll-animation";7
import  Image from "next/image"
const HobyHero = () => {
  return (
    <div className="flex flex-col my-4">
     <div className="flex w-full items-center justify-center h-screen bg-transparent">
       <Saline />
     </div>

        {/* <div className="flex items-center justify-center ">
            <h1></h1>
            <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
               
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={"/ka.png"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full "
          draggable={false}
        />
      </ContainerScroll>  
        </div> */}
       
    </div>
  )
}

export default HobyHero
