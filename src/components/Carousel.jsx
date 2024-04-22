import { CarouselData1 } from "../lib/CarouselData1"
import CarouselStyles from './Carousel.module.css'
const Carousel = () => {

  return (
    <div className="w-full">
        <div className={` ${CarouselStyles.scorllBar} flex  gap-4 overflow-x-auto mx-4 lg:mx-16`}>
       {CarouselData1.map((carouselData)=>{
        return  <div className={`${CarouselStyles.divtag} min-w-44  flex flex-col lg:min-w-64 relative  `}  key={carouselData.id}>
                <img  className=" w-full   " src={carouselData.productImage} alt=""  />
                <p className={` ${CarouselStyles.ptag} absolute  left-2 bottom-16 bg-white  px-2 hover:bottom-8  tracking-wide `}> &#8377;{carouselData.productPrice}</p>
                <p className="py-2">{carouselData.productName}</p>
                </div>       
       })}
        </div>
    </div>
  )
}

export default Carousel

