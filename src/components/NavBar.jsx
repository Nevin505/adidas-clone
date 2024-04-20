import { useState, useEffect } from "react";

import {
  FaSearch,
  FaShoppingCart,
  FaRegHeart,
  FaShoppingBag,
  FaChevronDown
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

// import BrandLogo from "../assets/adidasLogo.png";
import IconButton from "./IconButton";

import BrandLogo from "./BrandLogo";
import Down from "./Down";
import AnimationNavBar from "./AnimationNavBar";
import NavCategory from "./NavCategory";


const mainNavListUpper=["help","orders and returns","sign up","log in"]

const sideNavList=["Men","Women","Kids","Sports","New","LifeStyle","Essentials","Summer Shop","Cricket","Outlet"];


const NavBar = () => {

    const [isDispayled, setIsDisplayed] = useState(false);
  
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 905); // Example width threshold

    const[trigger,setTrigger]=useState(false);
    
    const [prevScrollPos, setPrevScrollPos] = useState(50);

    const [visible, setVisible] = useState(true);

    const[showCategory,setCategory]=useState(false);
  

    // const[navBar,setNavBar]=useState();
    
     
     trigger?document.body.style.overflow="hidden":document.body.style.overflow="auto";

    const showSideNavDisplayHandler = () => {
       setIsDisplayed((prev) => !prev);
    };
 

  console.log("NavBar render");

  // Update state based on screen width
  useEffect(() => {
    const handleResize = () => {
      console.log("Resizing");
      setIsSmallScreen(window.innerWidth < 905); 
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

     useEffect(() => {
       const handleScroll = () => {
         const currentScrollPos = window.scrollY;
   
         setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 168);
         setPrevScrollPos(currentScrollPos);
       };
   
       window.addEventListener('scroll', handleScroll);
   
       return () => {
         window.removeEventListener('scroll', handleScroll);
       };
     }, [prevScrollPos]);

     const handleDisplayClick=()=>{
        setTrigger(prev=>!prev)
     }

//    const handleCategoryList=(gender)=>{
//         setCategory(true);
//    }

   const handleCategoryListNo=()=>{
    setCategory(false);
   }

  return (
    <>
         {/* <div className={visible?"sticky w-full top-0  bg-white":" "}> */}
         <div className="w-full   flex flex-col items-center bg-black text-white ">
            <div className="flex gap-4 items-center " >
                   <AnimationNavBar/>
                   <FaChevronDown onClick={handleDisplayClick}/>
            </div>
            {trigger && <Down  onClick={handleDisplayClick}></Down>}
               
        </div>
      {!isSmallScreen     ? 
            <>
                  <div className="w-full"><menu className="flex gap-2 justify-end px-10  `">
                    {mainNavListUpper.map((list,index)=>{
                           return  <li className="font-thin py-1" key={index}>{list}</li>
                    })}
                   </menu> </div>
                      <nav className="flex justify-between w-full  border-2 border-red-700 px-10 ">
                          <BrandLogo/>
          <menu className="flex items-center gap-4 uppercase">
            <li className="font-bold cursor-pointer" onMouseOver={()=>handleCategoryList("Men")} onMouseLeave={handleCategoryListNo}>Men</li>
            <li className="font-bold cursor-pointer"  onMouseOver={()=>handleCategoryList("Women")} onMouseLeave={handleCategoryListNo}>Women</li>
            <li className="font-bold cursor-pointer"  onMouseOver={()=>handleCategoryList("Kids")} onMouseLeave={handleCategoryListNo}>Kids</li>
            <li className="cursor-pointer">New</li>
            <li className="cursor-pointer">Sport</li>
            <li className="cursor-pointer">LifeStyle</li>
            <li className="font-bold text-red-600 cursor-pointer">Outlet</li>
          </menu>

          <div className="flex items-center gap-1">
            <div className="relative flex">
              <input type="text" className="border-1 border-black px-2 py-1"  placeholder="Search" />
              <FaSearch className="absolute right-1 top-2 " />
            </div>
            <div className="flex items-center gap-6">
               <IconButton>
                  <div className="relative">
                  <p className="bg-yellow-300 w-4 rounded-2xl text-center absolute -right-2 -top-5  "> 1</p>
                  <FaShoppingCart size={24} />
                </div>
              </IconButton>
              <IconButton><FaRegHeart size={24} /></IconButton>
              <IconButton><FaShoppingBag size={24} /> </IconButton>
            </div>
          </div>
        </nav>
        {showCategory &&  <NavCategory/>}
        </>
       : 
        <nav className="w-full flex justify-between  px-4 py-2 ">
          {!isDispayled ? 
            <>
              <div className="flex items-center gap-4">
                <IconButton onClick={showSideNavDisplayHandler}>
                  <RxHamburgerMenu size={24} />
                </IconButton>
                <IconButton>
                  <FaRegHeart size={24} />
                </IconButton>
              </div>
              <BrandLogo/>
              <div className="flex items-center gap-6">
                <IconButton>
                  <FaShoppingCart size={24} />
                </IconButton>
                <IconButton>
                  <FaShoppingBag size={24} />
                </IconButton>
              </div>
            </>
           : 
            <div className="flex-1 transition-all duration-100">
                <div className=" flex justify-center w-full items-center">
                <BrandLogo/>
            <IconButton className=" " onClick={showSideNavDisplayHandler} >
                <IoClose size={24} />
              </IconButton>
          </div>

              <menu className="flex flex-col gap-2 items-center">
                {sideNavList.map((navList,index)=>{
                    return <ul key={index} ><button>{navList}</button></ul>
                })}
              
              </menu>
            </div>
          }
        </nav>
      }
         {/* </div> */}
    </>
  );
};

export default NavBar;
