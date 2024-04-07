import React, { useContext, useEffect  } from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'
import { motion } from "framer-motion"
import PropTypes from 'prop-types';

import { Store } from '@/context/Store';


const CustomModal = ({children,heading, setModalOpen, modalWidth, key }) => {
        const {  screen  } = useContext(Store)
        const ref = useOnclickOutside(() => setModalOpen(false));
        

        useEffect(() => {
                const handleKeyDown = (event) => {
                        if (event.key === 'Escape') {
                                setModalOpen(false); // Update the state when Escape is pressed
                        }
                };
            
                document.addEventListener('keydown', handleKeyDown); // Add event listener on component mount
            
                return () => {
                  document.removeEventListener('keydown', handleKeyDown); // Remove event listener on component unmount
                };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []); // Empty dependency array ensures that the effect runs only once on mount and cleanup on unmount
            

  return (
        <div className={  "modalOverlay"  }    >
                <motion.div  initial={{ y: "100%" ,opacity:0 }} animate={{ y: 0 ,opacity:1}} exit={{ y: "100%" ,opacity:0}} transition={{ type: "spring", bounce: 0.3, duration: 0.35 }}  className={"modalBox"} style={{width: screen >900  ? modalWidth  : "95%"}} ref={ref} key={key&&key}>
                        {
                                heading ?
                                <nav >
                                        <h5 className='font-bold text-offBlack text-[20px]'>{heading}</h5>
                                </nav>
                                :""
                        }
                        <section>
                                {children}
                        </section>
                </motion.div>
        </div>

  )
}

CustomModal.defaultProps={
        heading:"",
        isOpen: false ,
        modalWidth: "60%" ,
        

}

CustomModal.propTypes={
        heading:PropTypes.string,
        isOpen:PropTypes.bool.isRequired,
        modalWidth: PropTypes.string,
}

export default CustomModal