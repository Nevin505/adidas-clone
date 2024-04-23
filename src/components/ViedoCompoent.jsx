import { useRef, useState } from 'react'
import  AdidasLargeScreenViedo from '../assets/ViedoAssets/AdidasLargeViedo.mp4'
import  AdidasMediumScreenViedo from '../assets/ViedoAssets/AdidasMediumViedo.mp4'
import  AdidasSmallScreenViedo from '../assets/ViedoAssets/AdidasSmallScreen.mp4'
import Button from './Button'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaRegPlayCircle,FaPauseCircle } from "react-icons/fa";

const ViedoCompoent = () => {

    let controls=useRef();
   const[isPlaying,setisPlaying]=useState(false);

   const playViedoHandler=()=>{
        console.log(isPlaying);
        setisPlaying(prev=>!prev)
        if(isPlaying){
            controls.current.pause()
        }
        else{
            controls.current.play()
        }
       
   }
   console.log(isPlaying);

  return (
       <div className="w-full h-96">
           <div className="w-full h-full relative"> 
                <video ref={controls} className=" w-full h-full object-cover"  loop  >
               <source src={AdidasLargeScreenViedo} className="w-100" type="video/mp4" media="(min-width:700px)"/>
                <source src={AdidasMediumScreenViedo} type="video/mp4" media="(min-width:600px)"/>
              <source src={AdidasSmallScreenViedo}  type="video/mp4" media="(max-width:600px)"/>
             Your browser does not support the video tag.
             </video>
             <div className=' absolute left-10 bottom-4  text-white flex flex-col gap-4'>
              <h1 className='text-3xl font-bold '>Samba,Seziel & Gazelle</h1>
               <p className='font-semibold'>Three Icons,Thousand Stories</p>
                <div>
                <Button varaiantType='contained'>Shop Now <MdOutlineArrowRightAlt/></Button>            
                </div>
               {isPlaying ?<FaPauseCircle onClick={playViedoHandler} size={40} />:<FaRegPlayCircle onClick={playViedoHandler} size={40}/>}
             </div>
           </div>

      </div>
  )
}

export default ViedoCompoent
