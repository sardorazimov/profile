
import Mobileside from "./mobileside"
import WorkSidebar from "./sidebar"


const Worklayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="flex  mt-20  w-full">
      <div className="relative lg:w-44 lg:flex hidden ">
      <WorkSidebar icon="Icon" />
      </div>
      <div className="flex flex-col ">
         <Mobileside />
        {children} 
      </div>
       
    </main>
  )
}

export default Worklayout
