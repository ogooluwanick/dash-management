import React, { createContext,useEffect,useReducer, useState } from "react";
import Cookies from "js-cookie"
import { useRouter } from "next/router";


export const Store= createContext();

const initialState={
}



function reducer(state,action){
        switch(action.type){
        }
}


export function StoreProvider({ children }) {
        const router = useRouter();

        const [theme, setTheme] = useState(false)
        const [state, dispatch] = useReducer(reducer, initialState);
        const [scrollPos, setScrollPos] = useState(0);
        const [screen, setScreen] = useState(0)
        const [sideToggle, setSideToggle] = useState(screen>901 ? true : false)
        const [reviewModal, setReviewModal] = useState(false)
        const [allReviews, setAllReviews] = useState([
                {avater:"https://i.pinimg.com/564x/74/d4/e2/74d4e2fc85d73a4b2512f8e1d0170790.jpg", name:"James Smart", createdAt:"2022-01-18T20:18:21.916+00:00", location:"Ikate, Lekki", rating:3, category:"water", color:"blue",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/ea/9a/5d/ea9a5d6cc10ed3b4e2a3af550c774822.jpg", name:"Jennie Nichols", createdAt:"2023-01-18T20:18:21.916+00:00", location:"Ojodu, Ifo", rating:5, category:"traffic", color:"brown",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/a8/f9/b0/a8f9b0a92e1ef6d5fb6c99299cd23ad1.jpg", name:"Michigan Doe", createdAt:"2024-03-18T20:18:21.916+00:00", location:"Yaba, Tata", rating:2, category:"security", color:"orange",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/5a/26/54/5a265481f6da3ee4f032f872964317b2.jpg", name:"John Slow", createdAt:"2022-06-23T20:18:21.916+00:00", location:"Ketu, Lekki", rating:3, category:"road", color:"brown",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/b1/ff/f9/b1fff90b8b149719a65e326447b7e0bb.jpg", name:"Christ Star", createdAt:"2024-01-18T20:18:21.916+00:00", location:"Ikate, Ojo", rating:1, category:"network", color:"pink",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/e3/53/6a/e3536ae2ac1dde1c3847425d84cbdea1.jpg", name:"Fink Will", createdAt:"2023-11-18T20:18:21.916+00:00", location:"Kayi, Lekki", rating:5, category:"police", color:"red",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/b4/82/cc/b482cc66b75f9ecd3390f93bbb0393c7.jpg", name:"Frank Lamp", createdAt:"2021-01-13T20:18:21.916+00:00", location:"Ikate, Lekki", rating:3, category:"market", color:"blue",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/d3/cb/da/d3cbdae299e356990de95dd59852eeaf.jpg", name:"Ron Ibram", createdAt:"2026-02-18T20:18:21.916+00:00", location:"Abj, Magu", rating:1.5, category:"efcc", color:"red",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/b1/ff/f9/b1fff90b8b149719a65e326447b7e0bb.jpg", name:"James T.", createdAt:"2024-01-18T20:18:21.916+00:00", location:"Ikate, Ojo", rating:1, category:"network", color:"pink",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/564x/74/d4/e2/74d4e2fc85d73a4b2512f8e1d0170790.jpg", name:"James Smart", createdAt:"2022-01-18T20:18:21.916+00:00", location:"Ikate, Lekki", rating:3, category:"water", color:"blue",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/ea/9a/5d/ea9a5d6cc10ed3b4e2a3af550c774822.jpg", name:"Jennie Nichols", createdAt:"2023-01-18T20:18:21.916+00:00", location:"Ojodu, Ifo", rating:5, category:"traffic", color:"brown",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/a8/f9/b0/a8f9b0a92e1ef6d5fb6c99299cd23ad1.jpg", name:"Michigan Doe", createdAt:"2024-03-18T20:18:21.916+00:00", location:"Yaba, Tata", rating:2, category:"security", color:"orange",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/5a/26/54/5a265481f6da3ee4f032f872964317b2.jpg", name:"John Slow", createdAt:"2022-06-23T20:18:21.916+00:00", location:"Ketu, Lekki", rating:3, category:"road", color:"brown",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/b1/ff/f9/b1fff90b8b149719a65e326447b7e0bb.jpg", name:"Christ Star", createdAt:"2024-01-18T20:18:21.916+00:00", location:"Ikate, Ojo", rating:1, category:"network", color:"pink",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/e3/53/6a/e3536ae2ac1dde1c3847425d84cbdea1.jpg", name:"Timmy Will", createdAt:"2023-01-18T20:18:21.916+00:00", location:"Kayi, Lekki", rating:5, category:"police", color:"red",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/b4/82/cc/b482cc66b75f9ecd3390f93bbb0393c7.jpg", name:"Frank Lamp", createdAt:"2021-01-13T20:18:21.916+00:00", location:"Ikate, Lekki", rating:3, category:"market", color:"blue",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/d3/cb/da/d3cbdae299e356990de95dd59852eeaf.jpg", name:"Ron Ibram", createdAt:"2026-02-18T20:18:21.916+00:00", location:"Abj, Magu", rating:1.5, category:"efcc", color:"red",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
                {avater:"https://i.pinimg.com/474x/b1/ff/f9/b1fff90b8b149719a65e326447b7e0bb.jpg", name:"James T.", createdAt:"2024-01-18T20:18:21.916+00:00", location:"Ikate, Ojo", rating:1, category:"network", color:"pink",  text:"There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets." },
        ])


         // refresh props!
        const refreshData = () => {
                router.replace(router.asPath);
        }

        useEffect(() => {
                function handleScroll() {
                  setScrollPos(window.pageYOffset);
                }
                //initialize
                handleScroll()

                window.addEventListener('scroll', handleScroll);
            
                return () => {
                  window.removeEventListener('scroll', handleScroll);
                };
        }, []);

        useEffect(() => {
                const handleResize = () => {
                        setScreen(window.innerWidth);
                }
                
                //initialize
                handleResize();

                window.addEventListener("resize", handleResize);

                return () => {
                        window.removeEventListener("resize", handleResize);
                };
        }, []);
        
        const value = { state, dispatch,theme, setTheme, refreshData, scrollPos ,screen, setScreen, sideToggle, setSideToggle, reviewModal, setReviewModal, allReviews, setAllReviews};

        return <Store.Provider value={value}>{children}</Store.Provider>;
}
