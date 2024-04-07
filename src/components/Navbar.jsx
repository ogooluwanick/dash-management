import React, { useContext, useState } from 'react'
import { Store } from '@/context/Store'
import { SvgSearch } from '@/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image'


const Navbar = () => {
        const router = useRouter()
        const { setReviewModal, scrollPos} = useContext(Store)

        let isListing = router.asPath.includes("/listings")

        const [showUser, setShowUser] = useState(true)


  return (
    <div className={`navbar top-0 left-1/2 transform -translate-x-1/2 px-4 ${scrollPos >= 5  && "blur_navbar"   } ${isListing && "listing_variant "}`}>
        <div className={`app__flex !justify-between max-w-[1240px] mx-auto gap-[40px]  py-[28px] ${isListing && "!py-[16px]"}`}>
                <div className="flex gap-[42px] flex-1">
                        <Link href={"/"} className="logo app__flex gap-1 transition transition-250 hover:scale-[1.05]">
                                <span className=" tracking-[5px] text-[10px]">SPOTTA</span>
                                <span className=" app__flex bg-[#5378F6] text-white text-[7px] px-1 py-[2px] rounded-[2px]">NG</span>
                        </Link>

                        {
                                isListing && 
                                <div className="formController hidden h-[50px] w-full max-w-[770px] md:block" >
                                        <div className={`form_input `}>
                                                <SvgSearch id="svgleft" color="#3366FF" className="!top-[12px] !text-[#3366FF]" />
                                                <input type="text" placeholder="Enter Address" className='!py-[14px] !bg-[#FBFAFC]' />
                                        </div>
                                </div>
                        }
                </div>                

                {
                        showUser ?
                        <button  className="text-[14px] font-semibold  text-[#557FF2] transition transition-250 hover:opacity-40"  onClick={()=>setShowUser(val=>!val)}>Login</button>
                        :
                        <div className="app__flex gap-3" onClick={()=>setShowUser(val=>!val)}>
                                <p className="font-medium ">Welcome!</p>
                                <Image className='min-w-9 w-9   min-h-9 h-9 rounded-full object-cover ' src={"https://i.pinimg.com/474x/01/b1/63/01b1636fb3a38c24241d1edfe6bbf863.jpg"} alt='user avater' width={36} height={36}/>
                        </div>
                }
        </div>

        {
                isListing && 
                <div className="formController  h-[50px] w-full max-w-[770px] md:hidden mb-2" >
                        <div className={`form_input `}>
                                <SvgSearch id="svgleft" color="#3366FF" className="!top-[12px] !text-[#3366FF]" />
                                <input type="text" placeholder="Enter Address" className='!py-[14px] !bg-[#FBFAFC]' />
                        </div>
                </div>
        }

        {
                isListing &&
                <>
                        <div className={`app__flex !justify-between max-w-[1240px] mx-auto gap-[80px] mb-4`}>
                                <div className="flex-1  overflow-hidden">
                                        <h3 className='text-[16px] leading-[19px] font-medium md:text-[24px] md:leading-[29px] mb-[4px] truncate'>{router.query.address ? router.query.address : "Bonny and Clyde Street, Ajao Estate, Lagos"}</h3>
                                        <p className='text-[12px] font-normal truncate md:text-[16px] '><strong className='font-semibold'>“450”</strong> <span className='font-medium'>Reviews</span> (People are raving about the selected location)</p>
                                </div>

                                <div className="justify-center items-center  gap-4 hidden md:flex">
                                        <button className="primary_btn primary max-w-[210px] !px-10 !py-4" onClick={()=>setReviewModal(val=>!val)}>Leave a review</button>
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
                        <div className="flex justify-start items-center  gap-4  md:hidden mb-4 overflow-x-scroll">
                                <button className="primary_btn primary max-w-[210px] !px-10 !py-4 flex-1" onClick={()=>setReviewModal(val=>!val)}>Leave a review</button>
                                <button className="primary_btn secondary max-w-[210px] !px-4 !py-[13px]"><CiBookmark /></button>
                                <button className="primary_btn secondary max-w-[210px] !px-4 !py-[13px]"><CiShare2 /></button>
                        </div>
                </>
        }


    </div>
  )
}

export default Navbar