const CarouselCardOffers = ({offer}) => {
    return (
      <div className="w-full flex flex-col gap-2">
      <div className={` min-w-64  md:min-w-64 relative  flex flex-col  `}>
        {/* to Select Picture Based on the Screen Size */}
          <picture>
              <source srcSet={offer?.smallImage} media="(min-width:601px)"/>
              <source srcSet={offer?.mediumImage} media="(max-width:600px)" />
              <img  className=" w-full h-80" src={offer?.mediumImage} alt=""  />
          </picture>
      </div>
            <h6 className="font-bold md:text-sm">{offer?.title}</h6>
            <p className="text-sm md:text-sm">{offer?.titleSummary}</p>
       <button className="self-start font-semibold underline mt-auto uppercase">Sign Up</button>
      </div>
    )
  }
  
  export default CarouselCardOffers;
  