import CardStyles from './CarouselCardProducts.module.css'

const CarouselCardProducts = ({product}) => {
    let cardHoverStyles=CardStyles.divtag;
    let pStyles=CardStyles.ptag;
  return (
    <div className="flex flex-col gap-2">
    <div className={ `${cardHoverStyles}  min-w-64 relative  flex flex-col border-2 `}>
      {/* to Select Picture Based on the Screen Size */}
        <picture>
            <source srcSet={product?.productImage} media="(min-width:601px)"/>
            <source srcSet={product?.productImage} media="(max-width:600px)" />
        <img  className=" w-full" src={product?.productImage} alt=""  />
        </picture>
         <p className={`${pStyles} absolute  left-2 bottom-2 bg-white  px-2   tracking-wide `}> &#8377;{product?.productPrice}</p>
    </div>
    <p className="py-2">{product?.productName}</p> 

     
    </div>
  )
}

export default CarouselCardProducts
// ${CarouselStyles.ptag}