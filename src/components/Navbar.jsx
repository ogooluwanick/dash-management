import { Store } from '@/context/Store'
import Link from 'next/link'
import React, { useContext } from 'react'

const Navbar = () => {
        const { screen, scrollPos} = useContext(Store)

  return (
    <div className={`navbar   px-[12px] py-[28px]   top-0 left-1/2 transform -translate-x-1/2  ${scrollPos >= 5  && "blur_navbar"   } `}>
        <div className="app__flex !justify-between max-w-[1240px] mx-auto">
                <Link href={"/"} className="logo app__flex gap-1 transition transition-250 hover:scale-[1.05]">
                        <span className=" tracking-[5px] text-[10px]">SPOTTA</span>
                        <span className=" app__flex bg-[#5378F6] text-white text-[7px] px-1 py-[2px] rounded-[2px]">NG</span>
                </Link>

                <Link href="/login" className="text-[14px] font-semibold  text-[#557FF2] transition transition-250 hover:opacity-40">Login</Link>
        </div>
    </div>
  )
}

export default Navbar