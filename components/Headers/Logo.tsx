/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"


const Logo = () => {
  return (
    <div className=" flex ">
      <Link href={'/'} className=" flex ">
      <Image src="/svg/logo.svg" alt="" width={32} height={12} className="lg:flex items-center lg:py- " />
        <h1 className="font-extrabold text-xl text-neutral-100 py-4  mx-1 hidden lg:flex ">Azi<span className="text-violet-700">mov</span></h1>
      </Link>
    </div>
  )
}

export default Logo
