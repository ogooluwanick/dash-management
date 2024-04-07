import React, {  useState } from 'react'
import { AnimatePresence,  motion } from 'framer-motion';
import useOnclickOutside from "react-cool-onclickoutside";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";

import {  SvgLocation, SvgSearch } from '../icons';


const PlacesDrop = ({place,setPlace, isLoaded ,loadError, label="" }) => {

	const [show, setShow] = useState(false);

        const ref = useOnclickOutside(() => setShow(false));

        const { ready, value, setValue, suggestions: { status, data }, clearSuggestions,} = usePlacesAutocomplete({ debounce: 300, defaultValue:place.address });

        const handleSelect = async (suggestion) => {
                setValue(suggestion.description)
                clearSuggestions();
                setShow(false);
                try {
                    const results = await getGeocode({ address: suggestion.description });
                    const { lat, lng } = await getLatLng(results[0]);
                    const city = results[0].address_components.find(component => component.types.includes("locality"))?.long_name;
                    const stateOrProvince = results[0].address_components.find(component => component.types.includes("administrative_area_level_1"))?.long_name;
                    const country = results[0].address_components.find(component => component.types.includes("country"))?.long_name;
                    setPlace({
                        address:suggestion.description,
                        city :city? city : stateOrProvince , 
                        country:country,
                        lat:lat , lng:lng
                    })
                } catch (error) {
                        console.log(error)
                }
        };


        // useEffect(() => {
        //         if( value===null || value?.length>=0){
        //                 setPlace({address:null,lat:null, lng:null})
        //         }
        // },[setPlace, value])
                
        
  return (
        
        <div className={"mb-2 formController sm:mb-[20px] max-w-[557px] relative"} ref={ref}>
                { label ? <label htmlFor="">{label}</label> : ""}

                {
                        <>
                        <div className={`form_input  ${!ready &&"disabled"}`}  onClick={()=>setShow(true)}  >
                                <SvgSearch id="svgleft" className="!text-[#0D2159]"/>
                                <input value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        disabled={!ready || !isLoaded || loadError}
                                        type="text" placeholder={!isLoaded? "Loading..." : loadError ?"Error loading" : "Enter Address"}
                                />
                        </div>

                        <AnimatePresence>
                                
                                {(show && ready && data.length>0) && (
                                        <motion.ul className={"categoryUl"}
                                                initial={{ opacity: 0, height: '0%' }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0 }}
                                        >
                                                {
                                                        data.map((suggestion,id)=>(
                                                                <li key={id} onClick={()=>handleSelect(suggestion)} tabIndex={0} onKeyPress={e=>{e.key="Enter" && handleSelect(suggestion)}}>
                                                                        <SvgLocation />
                                                                        <span>{suggestion.description}</span>
                                                                </li>
                                                        ))
                                                }
                                        </motion.ul>
                                )}
                                
                        </AnimatePresence>
                        </>
                }
        </div>
  )
}

export default PlacesDrop