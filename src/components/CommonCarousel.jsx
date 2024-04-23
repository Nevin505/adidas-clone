import { useRef } from "react";

import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

import CommonCarouselStyles from "./CommonCarousel.module.css";

const CommonCarousel = ({ children, showControls = "scrollBar" }) => {
  let cssStyles = "";
  let showControlButtons = false;

  const handleScrollLeftSide = () => {
    scrollref.current.scrollLeft += -230;
    console.log(scrollref.current.scrollLeft);
  };

  const handleScrollRightSide = () => {
    scrollref.current.scrollLeft += 235;
    console.log(scrollref.current.clientWidth);
    console.log(scrollref.current.scrollWidth);
  };

  if (showControls === "scrollBar") {
    cssStyles = CommonCarouselStyles.scorllBar;
    cssStyles+=" "+" w-11/12 p-1 md:p-4 "
  } else {
    cssStyles = CommonCarouselStyles.controls;
    cssStyles+=" "+"w-full p-1 px-4 md:px-24"
    showControlButtons = true;
  }

  let scrollref = useRef(0);

  return (
    <div className="relative w-full flex justify-center">
      <div
        className={` ${cssStyles} flex  gap-4  overflow-x-auto   `}
        ref={scrollref}
      >
        {children}
      </div>

      {showControlButtons && (
        <>
          <div className="absolute left-2 top-56 hidden md:block">
            <BsArrowLeftSquare
              className="   bg-white"
              size={40}
              onClick={handleScrollLeftSide}
            />
          </div>
          <div className="absolute right-2 top-56 hidden md:block">
            <BsArrowRightSquare
              className="   bg-white"
              size={40}
              onClick={handleScrollRightSide}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CommonCarousel;
