import NavBar from "./components/NavBar";
import adidasLogo from "./assets/AdidasBackGround.png";
import adidasSmallLogo from "./assets/AdidasBackGroundSmall.png";
import adidasMediumLogo from "./assets/AdidasBackGroundMediums.png";
import { FaLongArrowAltRight } from "react-icons/fa";

import { MdOutlineArrowRightAlt } from "react-icons/md";
import "./App.css";
import Button from "./components/Button";
import Row from "./components/Row";
import ViedoCompoent from "./components/ViedoCompoent";
import Carousel from "./components/Carousel";
import Carousel2 from "./components/Carousel2";
import { CAROUSREL_DATA } from "./lib/CarouselDta2";
import { CAROUSREL_DATA_3 } from "./lib/CarouselData3";
import Footer from "./components/Footer";
function App() {
  // const element=document.getElementById("divv");
  // element.style.overflow='hidden'


  return (
    <div className="flex flex-col items-center ">
      <NavBar  />
      <div className=" w-full mt  border-2 border-black" id="divv">
        <div className="w-full  border-2 border-red-500 relative">
          <picture>
            <source srcSet={adidasSmallLogo} media="(max-width:500px)" />
            <source srcSet={adidasMediumLogo} media="(max-width:700px)" />
            <img
              src={adidasLogo}
              className="w-full h-[500px] object-fill max-[500px]:h-auto"
              alt="BackGround-Image"
            />
          </picture>
          <div className=" flex flex-col gap-8  w-96 absolute bottom-16 left-14 py-16 max-[500px]:4rem max-[500px]:w-4/5 max-[500px]:bottom-4">
            <h1 className="text-white text-3xl font-bold max-[500px]:text-2xl">
              PARIS IS CALLING
            </h1>
            <p className="text-white max-[500px]:text-sm">
              Enter the adiClub Pro Pass Draw For Your Chance to win next-level
              Trip tp Paris
            </p>
            <Row>
              <Button varaiantType="contained">
                EXPLORE MORE
                <MdOutlineArrowRightAlt />
              </Button>
              <Button varaiantType="contained">sign up
              <MdOutlineArrowRightAlt /> </Button>
            </Row>
          </div>
        </div>
      </div>
      <ViedoCompoent />
      <div className="px-16 flex w-full gap-4 py-8">
        <Button>New Arrivals</Button>
        <Button>Best of Adidas</Button>
      </div>
      <Carousel />

      <div className="uppercase w-full   flex flex-col gap-4  px-4 py-8 md:px-24 md:py-8">
        <h1 className="font-bold text-2xl md:text-3xl">AdiClub Days are Here</h1>
        <p className="text-sm md:text-lg">
          Unforgettable experiences, exclusive drops and more. You're in for a
          treat.
        </p>
      </div>

      <Carousel2 CAROUSREL_DATA={CAROUSREL_DATA} />
      <h1 className="font-bold text-start w-full text-xl px-4  py-8 md:px-16  md:text-3xl">WHAT'S HOT?</h1>
      <Carousel2 CAROUSREL_DATA={CAROUSREL_DATA_3} /> 

      <div className="px-8 bg-yellow-100 py-12 md:px-14  lg:px-20">
        <Row>
          <div className="flex-1 basis-[28rem]">
            <h2 className="font-bold text-xl  sm:text-2xl md:text-3xl ">STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949</h2>
            <p className="pt-4 md:text-[1.1rem]">
              Sport keeps us fit. Keeps you mindful. Brings us together. Through
              sport we have the power to change lives. Whether it is through
              stories of inspiring athletes. Helping you to get up and get
              moving. Sportswear featuring the latest technologies, to up your
              performance. Beat your PB. adidas offers a home to the runner, the
              basketball player, the soccer kid, the fitness enthusiast. The
              weekend hiker that loves to escape the city. The yoga teacher that
              spreads the moves. The 3-Stripes are seen in the music scene. On
              stage, at festivals. Our sports clothing keeps you focused before
              that whistle blows. During the race. And at the finish lines.
              We’re here to support creators. Improve their game. Their lives.
              And change the world. adidas is about more than sportswear and
              workout clothes. We partner with the best in the industry to
              co-create. This way we offer our fans the sports apparel and style
              that match their athletic needs, while keeping sustainability in
              mind. We’re here to support creators. Improve their game. Create
              change. And we think about the impact we have on our world.
            </p>
            <p  className="pt-4  md:text-[1.1rem]">
            adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sports apparel and style that match their athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.
            </p>
          </div>
          <div className="flex-1  basis-[28rem]">
            <h2 className="font-bold text-xl  sm:text-2xl md:text-3xl"> WORKOUT CLOTHES, FOR ANY SPORT</h2>
            <p   className="pt-4  md:text-[1.1rem]">
              adidas designs for and with athletes of all kinds. Creators, who
              love to change the game. Challenge conventions. Break the rules
              and define new ones. Then break them again. We supply teams and
              individuals with athletic clothing pre-match. To stay focussed. We
              design sports apparel that get you to the finish line. To win the
              match. We support women, with bras and tights made for purpose.
              From low to high support. Maximum comfort. We design, innovate and
              itterate. Testing new technologies in action. On the pitch, the
              tracks, the court, the pool. Retro workout clothes inspire new
              streetwear essentials. Like NMD, Ozweego and our Firebird
              tracksuits. Classic sports models are brought back to life. Like
              Stan Smith. And Superstar. Now seen on the streets and the stages.
              Through our collections we blur the borders between high fashion
              and high performance. Like our adidas by Stella McCartney athletic
              clothing collection – designed to look the part inside and outside
              of the gym. Or some of our adidas Originals lifestyle pieces, that
              can be worn as sportswear too. Our lives are constantly changing.
              Becoming more and more versatile. And adidas designs with that in
              mind.
            </p>
            <p  className="pt-4  md:text-[1.1rem]">
           Through our collections we blur the borders between high fashion and high performance. Like our adidas by Stella McCartney athletic clothing collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals lifestyle pieces, that can be worn as sportswear too. Our lives are constantly changing. Becoming more and more versatile. And adidas designs with that in mind.


            </p>
          </div>
        </Row>
      </div>
      <div className="w-full  flex  flex-wrap justify-center items-center gap-4 bg-yellow-200 text-center p-8">
      <h1 className="text-3xl font-bold"> JOIN ADIDAS AND GET 15% OFF</h1>
      <div className="  p-4 idd relative ">
        <button className="flex gap-4 items-center   px-4 py-1 bg-black text-white ">SIGN UP FOR FREE 
        <span className="leftbar">
        <FaLongArrowAltRight  className="text-white  " size={40} /></span></button> 
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
