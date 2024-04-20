import { useRef, useState } from "react";
// import { CAROUSREL_DATA } from "../lib/CarouselDta2";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import CarouselStyles from "./Carousel2.module.css";
import shoe10 from "../assets/ScrollBar-1/shoe-10.png";

const Carousel2 = ({CAROUSREL_DATA}) => {
  let scrollref = useRef(0);

  // const [isArrowDisplayed,setArrowDisplayed]=useState(false);

  const handleScrollLeftSide = (e) => {
    e.stopPropagation();
    scrollref.current.scrollLeft += -230;
    console.log(scrollref.current.scrollLeft);
  };

  const handleScrollRightSide = (e) => {
    e.stopPropagation();
    scrollref.current.scrollLeft += 235;
    console.log(scrollref.current.clientWidth);
    console.log(scrollref.current.scrollWidth);
  };

  return (
    <div className="relative w-11/12 flex justify-center">
      <div
        className={` ${CarouselStyles.scorllBar} flex  gap-4  overflow-x-auto p-1 md:p-4`}
        ref={scrollref}
      >
        {CAROUSREL_DATA?.map((data) => {
          return (
            <div className=" flex flex-col gap-2 min-w-[22rem] flex-1" key={data.id}>
              <picture>
                <source srcSet={data.smallImage} media="(min-width:601px)" />
                <source srcSet={shoe10} media="(max-width:600px)" />
                <img className="w-full h-96" autoFocus={false} src={data.mediumImage} alt="" />
              </picture>
              <h6 className="font-bold md:text-xl">{data.heading}</h6>
              <p className="text-sm md:text-lg">{data.paragraph}</p>
              <button className="self-start font-semibold underline mt-auto uppercase">Sign Up</button>
            </div>
          );
        })}
      </div>
      <div className="absolute left-8 top-2/4">
        <BsArrowLeftSquare
          className="   bg-white"
          size={40}
          onClick={handleScrollLeftSide}
        />
      </div>

      <div className="absolute right-8 top-2/4">
        <BsArrowRightSquare
          className="  bg-white"
          size={40}
          onClick={handleScrollRightSide}
        />
      </div>
    </div>
  );
};

export default Carousel2;
