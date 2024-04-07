import React, { useContext, useState } from 'react'
import { CustomModal, MotionWrap, Rating } from '@/components'
import { SvgMessageStroke, SvgThumbDownStroke, SvgThumbsUpStroke } from '@/icons'
import { AnimatePresence } from 'framer-motion'
import moment from 'moment'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import { Store } from '@/context/Store'
import { IoIosArrowDown } from 'react-icons/io'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';


const Listings = () => {
        const { register, handleSubmit , formState:{errors} ,watch} = useForm();
        const { reviewModal, setReviewModal } = useContext(Store)
        const router = useRouter()

        const [showComment, setShowComment] = useState(0)
        const [inputRating, setInputRating] = useState({active: true, val: 0})
        const [loading, setLoading] = useState(false)
        
        
        const submitHandler = async ({ email, password,fname, lname,phone }) => {
                setLoading(true)

                setTimeout(() => {
                        setLoading(false)

                }, 1500);
        }


  return (
        <MotionWrap>
                <div className="flex flex-col-reverse  gap-8 min-h-[90vh] relative pb-6 mt-[310px] md:mt-[220px] md:flex-row " >
                        <div className="threads flex-[3] flex flex-col gap-4">
                        {
                                [
                                        {avater:"https://i.pinimg.com/564x/74/d4/e2/74d4e2fc85d73a4b2512f8e1d0170790.jpg", name:"James Smart", createdAt:"2022-01-18T20:18:21.916+00:00", location:"Ikate, Lekki", rating:3, category:"water", color:"blue",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/ea/9a/5d/ea9a5d6cc10ed3b4e2a3af550c774822.jpg", name:"Jennie Nichols", createdAt:"2023-01-18T20:18:21.916+00:00", location:"Ojodu, Ifo", rating:5, category:"traffic", color:"brown",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/a8/f9/b0/a8f9b0a92e1ef6d5fb6c99299cd23ad1.jpg", name:"Michigan Doe", createdAt:"2024-03-18T20:18:21.916+00:00", location:"Yaba, Tata", rating:2, category:"security", color:"orange",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/5a/26/54/5a265481f6da3ee4f032f872964317b2.jpg", name:"John Slow", createdAt:"2022-06-23T20:18:21.916+00:00", location:"Ketu, Lekki", rating:3, category:"road", color:"brown",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/b1/ff/f9/b1fff90b8b149719a65e326447b7e0bb.jpg", name:"Christ Star", createdAt:"2024-01-18T20:18:21.916+00:00", location:"Ikate, Ojo", rating:1, category:"network", color:"pink",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/e3/53/6a/e3536ae2ac1dde1c3847425d84cbdea1.jpg", name:"Fink Will", createdAt:"2023-21-18T20:18:21.916+00:00", location:"Kayi, Lekki", rating:5, category:"police", color:"red",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/b4/82/cc/b482cc66b75f9ecd3390f93bbb0393c7.jpg", name:"Frank Lamp", createdAt:"2021-01-13T20:18:21.916+00:00", location:"Ikate, Lekki", rating:3, category:"market", color:"blue",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/d3/cb/da/d3cbdae299e356990de95dd59852eeaf.jpg", name:"Ron Ibram", createdAt:"2026-02-18T20:18:21.916+00:00", location:"Abj, Magu", rating:1.5, category:"efcc", color:"red",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/b1/ff/f9/b1fff90b8b149719a65e326447b7e0bb.jpg", name:"James T.", createdAt:"2024-01-18T20:18:21.916+00:00", location:"Ikate, Ojo", rating:1, category:"network", color:"pink",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/564x/74/d4/e2/74d4e2fc85d73a4b2512f8e1d0170790.jpg", name:"James Smart", createdAt:"2022-01-18T20:18:21.916+00:00", location:"Ikate, Lekki", rating:3, category:"water", color:"blue",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/ea/9a/5d/ea9a5d6cc10ed3b4e2a3af550c774822.jpg", name:"Jennie Nichols", createdAt:"2023-01-18T20:18:21.916+00:00", location:"Ojodu, Ifo", rating:5, category:"traffic", color:"brown",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/a8/f9/b0/a8f9b0a92e1ef6d5fb6c99299cd23ad1.jpg", name:"Michigan Doe", createdAt:"2024-03-18T20:18:21.916+00:00", location:"Yaba, Tata", rating:2, category:"security", color:"orange",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/5a/26/54/5a265481f6da3ee4f032f872964317b2.jpg", name:"John Slow", createdAt:"2022-06-23T20:18:21.916+00:00", location:"Ketu, Lekki", rating:3, category:"road", color:"brown",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/b1/ff/f9/b1fff90b8b149719a65e326447b7e0bb.jpg", name:"Christ Star", createdAt:"2024-01-18T20:18:21.916+00:00", location:"Ikate, Ojo", rating:1, category:"network", color:"pink",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/e3/53/6a/e3536ae2ac1dde1c3847425d84cbdea1.jpg", name:"Fink Will", createdAt:"2023-21-18T20:18:21.916+00:00", location:"Kayi, Lekki", rating:5, category:"police", color:"red",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/b4/82/cc/b482cc66b75f9ecd3390f93bbb0393c7.jpg", name:"Frank Lamp", createdAt:"2021-01-13T20:18:21.916+00:00", location:"Ikate, Lekki", rating:3, category:"market", color:"blue",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/d3/cb/da/d3cbdae299e356990de95dd59852eeaf.jpg", name:"Ron Ibram", createdAt:"2026-02-18T20:18:21.916+00:00", location:"Abj, Magu", rating:1.5, category:"efcc", color:"red",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                        {avater:"https://i.pinimg.com/474x/b1/ff/f9/b1fff90b8b149719a65e326447b7e0bb.jpg", name:"James T.", createdAt:"2024-01-18T20:18:21.916+00:00", location:"Ikate, Ojo", rating:1, category:"network", color:"pink",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                                ].map((review,i)=>(
                                <>
                                        <div className="review" key={i} onClick={()=>setShowComment(i)}>
                                                <div className="review_head" >   
                                                        <Image src={review.avater} alt="review user" height={25} width={25}/>
                                                        <div className="head_info">
                                                                <div className="left_info">
                                                                        <p className="truncate">{review.name}</p>
                                                                        <span className="">{moment(review.createdAt).fromNow()}</span>
                                                                </div>
                                                                <div className="right_info">
                                                                        <AiFillStar style={{ color:"#FABB07", fontSize: "12px" }} aria-label='full-star'/> 
                                                                        <p className="truncate">{review.rating.toFixed(1)}</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <p className="review_content">{review.text}</p>

                                                <div className="review_footer">
                                                        <div className="actions">
                                                                <SvgThumbsUpStroke  className="w-[16px] h-[14px]"/> <span>1224</span>
                                                                <SvgThumbDownStroke className="w-[16px] h-[16px]"/> <span>04</span>
                                                                <SvgMessageStroke className="w-[14px] h-[14px]"/> <span>24</span>
                                                        </div>
                                                </div>

                                                {
                                                        showComment == i &&
                                                        <>

                                                                <hr className='mt-4' />

                                                                <section className="app__flex pt-[13px] -mb-[16px] gap-3">
                                                                        <input className='flex-1 text-[14px] leading-[16px] outline-0' type="text" placeholder='Add a comment' />
                                                                        <button className="primary_btn primary !px-3 !py-[5.5px] !w-fit font-medium text-[16px]">POST</button>
                                                                </section>

                                                        </>
                                                        
                                                }
                                        </div>
                                        <hr className='' />
                                </>
                                ))
                        }
                                

                               

                        </div>
                        <div className=" thread_imgs ">
                                <div className="">
                                        <Image src={"https://i.pinimg.com/474x/06/67/81/066781e0eb07873617551faa15fc5036.jpg"} alt='thread image' width={235} height={224} />
                                </div>
                                <div className="">
                                        <Image src={"https://i.pinimg.com/474x/fb/97/b9/fb97b94a8a6e476b4e4e6d6e6ed4dba7.jpg"} alt='thread image' width={235} height={224} />
                                </div>
                                <div className="">
                                        <Image src={"https://i.pinimg.com/474x/ae/8e/6f/ae8e6ff8a8d1a07c33edb0bbdd370530.jpg"} alt='thread image' width={235} height={224} />
                                </div>
                                <div className="">
                                        <Image src={"https://i.pinimg.com/474x/ea/b0/41/eab04112a020383279b5c2bb41847e03.jpg"} alt='thread image' width={235} height={224} />
                                        <button className="">VIEW MORE</button>
                                </div>
                        </div>
                </div>
                
                <AnimatePresence exitBeforeEnter >
                        {
                                reviewModal && (
                                <section className='viewModal'>
                                        <CustomModal
                                                heading={"Review Location"}
                                                modalOpen={reviewModal}
                                                setModalOpen={setReviewModal}
                                                modalWidth={"700px"}
                                        >
                                                <form onSubmit={handleSubmit(submitHandler)}>
                                                        <p className="font-medium text-[20px] leading-6 mb-6 truncate">{router.query.address ? router.query.address : "Bonny and Clyde Street, Ajao Estate, Lagos"}</p>

                                                        <div className="formController mb-[16px] " >
                                                                <div className={`form_input `}>
                                                                        <select className='!border-0 !outline-none !py-[17px] !px-[16px]'  name='category' id='category'  {...register("category", {required:"A category is required. 😭"})}  >
                                                                                <option value="">Select Amenities</option>
                                                                                {
                                                                                        ["Schools","Hospitals","Resort Park","Shopping Malls","Airport","Train Station","Nightlife","Public Wifi","Parking Lot","Security","Quiet","Bus Station","Public Transport"]
                                                                                        .map((item,i)=>(
                                                                                                <option value={item} key={i}>{item}</option>
                                                                                        ))
                                                                                }
                                                                        </select>
                                                                        <IoIosArrowDown id="svgright" color="#8F95B2" className=" !text-[#8F95B2]" />
                                                                </div>
                                                                <span className='desc warn' >{ errors.category && errors.category.message }</span>
                                                        </div>

                                                        <h5 className="font-medium text-[14px] mb-[14px] leading-[16px]">Rate location</h5>
                                                        <Rating input={inputRating} setInput={setInputRating} color='rgba(255, 199, 0, 0.4)' />

                                                        <div className="formController mt-6" >
                                                                <label htmlFor="" className='text-[14px] !text-[#1E1E1E]'>Write Review</label>
                                                                <div className={`form_input `}>
                                                                        <textarea placeholder="Placeholder" id='review' name='review' className='min-h-[173px] !max-h-[200px] !p-3 !bg-[#FBFAFC]' {...register("review", {required:"Give us two cents. 😭"})} />
                                                                </div>
                                                                <span className='desc warn' >{ errors.review && errors.review.message }</span>
                                                        </div>

                                                        <div className="flex items-center gap-2 mt-4 mb-6 w-fit">
                                                                <input type="checkbox" className='accent-[#3869ff]' id="anonymous-checkbox"/>
                                                                <label for="anonymous-checkbox" className='text-[14px] leading-[16.94px]'>Post as Anonymous</label>
                                                        </div>

                                                        <div className="flex gap-6">
                                                                <button className="primary_btn primary" disabled={loading || (!watch("category") || !watch("review"))} type='submit' >SUBMIT</button>
                                                                <button className="primary_btn secondary" onClick={()=>setReviewModal(false)}>CANCEL</button>
                                                        </div>
                                                </form>
                                        </CustomModal>
                                </section >
                                )
                        }
                </AnimatePresence>
        </MotionWrap>
  )
}

export default Listings