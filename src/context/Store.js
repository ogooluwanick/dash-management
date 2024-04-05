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
        
        const value = { state, dispatch,theme, setTheme, refreshData, scrollPos ,screen, setScreen, socket, sideToggle, setSideToggle};

        return <Store.Provider value={value}>{children}</Store.Provider>;
}
