import { Store } from '@/context/Store'
import { SvgSearch } from '@/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";


const Navbar = () => {
        const router = useRouter()
        const { screen, scrollPos} = useContext(Store)

        let isListing = router.asPath.includes("/listings")

  return (
    <div className={`navbar top-0 left-1/2 transform -translate-x-1/2 px-4 ${scrollPos >= 5  && "blur_navbar"   } ${isListing && "listing_variant "}`}>
        <div className={`app__flex !justify-between max-w-[1240px] mx-auto gap-[80px]  py-[28px] ${isListing && "!py-[16px]"}`}>
                <div className="flex gap-[42px] flex-1">
                        <Link href={"/"} className="logo app__flex gap-1 transition transition-250 hover:scale-[1.05]">
                                <span className=" tracking-[5px] text-[10px]">SPOTTA</span>
                                <span className=" app__flex bg-[#5378F6] text-white text-[7px] px-1 py-[2px] rounded-[2px]">NG</span>
                        </Link>

                        {
                                isListing && 
                                <div className="formController h-[50px] w-full max-w-[770px]" >
                                        <div className={`form_input `}>
                                                <SvgSearch id="svgleft" color="#3366FF" className="!top-[12px] !text-[#3366FF]" />
                                                <input type="text" placeholder="Enter Address" className='!py-[14px] !bg-[#FBFAFC]' />
                                        </div>
                                </div>
                        }
                </div>


                <Link href="/login" className="text-[14px] font-semibold  text-[#557FF2] transition transition-250 hover:opacity-40">Login</Link>
        </div>

        {
                isListing &&
                <>
                        <div className={`app__flex !justify-between max-w-[1240px] mx-auto gap-[80px] mb-4`}>
                                <div className="">
                                        <h3 className='font-medium text-[24px] leading-[29px] mb-[4px]'>Bonny and Clyde Street, Ajao Estate, Lagos</h3>
                                        <p className='font-normal'><strong className='font-semibold'>“450”</strong> <span className='font-medium'>Reviews</span> (People are raving about the selected location)</p>
                                </div>

                                <div className="app__flex  gap-4">
                                        <button className="primary_btn primary max-w-[210px] !px-10 !py-4">Leave a review</button>
                                        <button className="primary_btn secondary max-w-[210px] !px-4 !py-[13px]"><CiBookmark /></button>
                                        <button className="primary_btn secondary max-w-[210px] !px-4 !py-[13px]"><CiShare2 /></button>
                                </div>
                        </div>

                        <div className="app__flex gap-2 max-w-[1240px] mx-auto  mb-4">
                                <div className="flex gap-2  overflow-x-scroll">
                                        {
                                                ["Schools","Hospitals","Resort Park","Shopping Malls","Airport","Train Station","Nightlife","Public Wifi","Parking Lot","Security","Quiet","Bus Station","Public Transport"]
                                                .map((item,i)=>(
                                                        <button key={i} className={`text-[14px] whitespace-nowrap leading-[16px]  border-solid border-[#1E1E1E] border-[.2px] rounded-[4px] bg-[#FBFAFC] py-1 px-2 transition transition-250 hover:opacity-40 `}>{item}</button>
                                                ))
                                        }
                                </div>
                                <span className="app__flex rounded-full  bg-[#FBFAFC] cursor-pointer min-w-6 min-h-6"><IoIosArrowForward  color='#344054' /></span>
                        </div>
                </>
        }
    </div>
  )
}

export default Navbar