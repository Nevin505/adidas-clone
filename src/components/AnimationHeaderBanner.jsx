import { useEffect,useState } from "react";

import Down from "./Down";
import {FaChevronDown} from "react-icons/fa";
import IconButton from "./IconButton";

const aniamtedContent=["UPI & NET BANKING AVAILABLE","ADICLUB DAYS ARE HERE","FREE DELIVERY, RETURN & EXCHANGE"];

const AnimationHeaderBanner = () => {

    const [i, setI] = useState(0);

    const[displayPanel,setDisplayPanel]=useState(false);


    useEffect(()=>{
        console.log("Setting time out");
         let arrayLength=aniamtedContent.length;
          const intervalId=setInterval(
            ()=>{
                  setI((prev)=>{
                    return prev<arrayLength-1?prev+1:0
                  })
            }
         ,8000);
       return ()=>{ clearInterval(intervalId) }
    
      },[])


      const handleDisplayClick=()=>{
        setDisplayPanel(prev=>!prev)
     }


     displayPanel?document.body.style.overflow="hidden":document.body.style.overflow="auto";

  return (
    
         <>
         <div className="w-full   flex gap-4 justify-center items-center bg-black text-white py-2 ">
          <p> {aniamtedContent[i]}</p> 
          <IconButton><FaChevronDown onClick={handleDisplayClick}/></IconButton> 
         </div>
         {displayPanel && <Down  onClick={handleDisplayClick}></Down>}   </> 

  )
}

export default AnimationHeaderBanner;
