import { useEffect,useState } from "react";

const aniamtedContent=["UPI & NET BANKING AVAILABLE","ADICLUB DAYS ARE HERE","FREE DELIVERY, RETURN & EXCHANGE"];

const AnimationNavBar = () => {

    const [i, setI] = useState(0);
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
  return (

       <p> {aniamtedContent[i]}</p>

  )
}

export default AnimationNavBar
