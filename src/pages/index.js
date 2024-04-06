import { MotionWrap, Rating } from "@/components";
import { Store } from "@/context/Store";
import { SvgMessage, SvgSearch, SvgShape, SvgThumbsDown } from "@/icons";
import Image from "next/image";
import { useContext } from "react";
import moment  from "moment";



export default function Home() {

        const { scrollPos } = useContext(Store)

  return (
        <MotionWrap>
                <div className=" h-[200vh] relative">
                        <section className="app__flex !justify-between gap-8 fixed w-[100vw] max-w-[1240px]">

                                <div className="flex-[3]"> 
                                        <h1 className="max-w-[504px] text-[64px] leading-[77.45px] mb-[40px]">Find a place you will love to live!</h1>

                                        <p className="max-w-[504px] text-2xl leading-[30px] mb-[40px]">See through the lenses of people who have lived or visited the neighbourhood you might have in mind.</p>

                                        <div className="formController mb-[20px] max-w-[557px]" >
                                                <div className={`form_input `}>
                                                        <SvgSearch id="svgleft"/>
                                                        <input type="text" placeholder="Enter Address" />
                                                </div>
                                        </div>
                                        <div className="primary_btn primary max-w-[150px]">Search</div>
                                </div>


                                <div className="review_rolls flex-[2] h-[90vh]">
                                        <div className="row">
                                                <section style={{
                                                        transform: `translateY(${-( scrollPos)}px)`, 
                                                        transition: 'transform 0.5s ease-out', 
                                                }}>
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
                                                                <div className="review" key={i}>
                                                                        <div className="review_head">   
                                                                                <Image src={review.avater} alt="review user" height={25} width={25}/>
                                                                                <div className="head_info">
                                                                                        <div className="left_info">
                                                                                                <p className="truncate">{review.name}</p>
                                                                                                <span className="">{moment(review.createdAt).fromNow()}</span>
                                                                                        </div>
                                                                                        <div className="right_info">
                                                                                                <p className="truncate">{review.location}</p>
                                                                                                <Rating rating={review.rating} color="#FABB07"/>
                                                                                        </div>
                                                                                </div>
                                                                        </div>

                                                                        <p className="review_content">{review.text}</p>

                                                                        <div className="review_footer">
                                                                                <div className="actions">
                                                                                        <SvgShape className="w-[16px] h-[14px]"/> <span>24</span>
                                                                                        <SvgThumbsDown className="w-[16px] h-[16px]"/> <span>02</span>
                                                                                        <SvgMessage className="w-[14px] h-[14px]"/> <span>125</span>
                                                                                </div>
                                                                                <div className={`category_item   ${review.color}`}>{review.category}</div>
                                                                        </div>

                                                                </div>
                                                        ))
                                                }
                                                </section>
                                        </div>
                                        <div className="row">
                                                <section style={{
                                                        top:"-109%",
                                                        transform: `translateY(${( scrollPos)}px)`, 
                                                        transition: 'transform 0.5s ease-out', 

                                                }}>
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
                                                                <div className="review" key={i}>
                                                                        <div className="review_head">   
                                                                                <Image src={review.avater} alt="review user" height={25} width={25}/>
                                                                                <div className="head_info">
                                                                                        <div className="left_info">
                                                                                                <p className="truncate">{review.name}</p>
                                                                                                <span className="">{moment(review.createdAt).fromNow()}</span>
                                                                                        </div>
                                                                                        <div className="right_info">
                                                                                                <p className="truncate">{review.location}</p>
                                                                                                <Rating rating={review.rating} color="#FABB07"/>
                                                                                        </div>
                                                                                </div>
                                                                        </div>

                                                                        <p className="review_content">{review.text}</p>

                                                                        <div className="review_footer">
                                                                                <div className="actions">
                                                                                        <SvgShape className="w-[16px] h-[14px]"/> <span>24</span>
                                                                                        <SvgThumbsDown className="w-[16px] h-[16px]"/> <span>02</span>
                                                                                        <SvgMessage className="w-[14px] h-[14px]"/> <span>125</span>
                                                                                </div>
                                                                                <div className={`category_item   ${review.color}`}>{review.category}</div>
                                                                        </div>

                                                                </div>
                                                        ))
                                                }
                                                </section>
                                                
                                        </div>
                                </div>
                        </section>
                </div>
        </MotionWrap>
  );
}
