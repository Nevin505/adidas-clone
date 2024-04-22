import { IoClose } from "react-icons/io5";
import IconButton from "./IconButton";

const Down = ({onClick}) => {
  
  return (
    <div className="w-full flex flex-col  items-center border-2  border-blue-700 fixed p-1 bg-white z-10 md:p-4" >
            <button  className="text-black self-end p-2 border-2 border-black " onClick={onClick}><IoClose size={30}/></button>
            <div className="flex  flex-wrap text-black w-full gap-16 p-8 md:p-24  max-[900px]:py-1  max-[900px]:gap-1">
                <div className="flex-1 basis-64"> 
                <h3 className="font-semibold">ADICLUB DAYS ARE HERE</h3>
                <p>From the adiClub Pro Pass trip to Paris to exclusive drops and rewards, there are plenty of reasons to sign up. Discover the best of adidas during adiClub Days. Only for members.</p>
               <div className="py-8 max-[900px]:py-1">
               <a href="">EXPLORE MORE</a>
                </div>
              </div>
           <div className="flex-1 basis-64 max-[900px]:py-1">
                <h3 className="font-semibold"> FREE DELIVERY, RETURN & EXCHANGE</h3>
                 <p>Spend over Rs1000/- and your delivery is FREE!
                 For all orders, Return & Exchange is offered for free.
                 Delivery times for Metro Cities: 2-3 Days Others: 4-5 Days</p>
                 <div className="py-8 flex flex-col gap-4 max-[900px]:gap-1">
                 <a href="">READ MORE ON DELIVERY</a>
                 <a href="">READ MORE ON RETURN</a>
                 <a href="">READ MORE ON EXCHANGE</a>
                 </div>
          </div>
             <div className="flex-1 basis-64 max-[900px]:py-1`">
           <h3 className="font-semibold"> UPI & NET BANKING AVAILABLE</h3>
           <p>Save 5% Extra on paying online for all orders under Rs 5000/-</p>
            </div>
    </div>

    </div>

  )
}

export default Down
