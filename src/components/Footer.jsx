import { useEffect, useState } from "react";
import Row from "./Row";


const subElements1 =["Footwear","Clothing","Accessories","Outlet – Sale New Arrivals Special Offer Flat 50% Off!"];
const subElements2=["Cricket","Running","Football","Gym/Training","Tennis","Outdoor","Basketball","Swimming","Skateboarding"]
const subElements3=["Ultraboost","Superstar","NMD","Stan Smith","Sustainability","Predator","Parley","adicolor"]
const subElements4=["Help","Customer Services","Returns & Exchanges","Shipping","Order Tracker","Store Locator"," Running Shoe","adicolor","adiclub Terms and conditions"]
const subElements5=["About Us","adidas stories","adidas Apps","Entity Details","Press","Careers"]

const mobileScreenSubElements=["Delievery","Refunds $ Referrals","Order Tracker","Help","Store Finder","adiClub","terms and Condition"]

const Footer = ({isSmallScreen}) => {


  return (
    <>
    
    {!isSmallScreen ?
          <div className="w-4/5 pt-8 ">
      <Row largeGap="true">
          <div className="flex-1 ">
          <h1 className="font-bold">PRODUCTS</h1>
           {subElements1.map((element,index)=>{
            return <p key={index} className="leading-7 text-sm">{element}</p>
           })}
        </div>
        <div className="flex-1">
          <h1  className="font-bold">SPORTS</h1>
          {subElements2.map((element,index)=>{
            return <p key={index} className="leading-7 text-sm">{element}</p>
           })}
        </div>
        <div className="flex-1">
          <h1  className="font-bold">COLLECTIONS</h1>
          {subElements3.map((element,index)=>{
            return <p key={index} className="leading-7 text-sm">{element}</p>
           })}
        </div>
        <div className="flex-1 basis-24">
          <h1  className="font-bold">SUPPORT</h1>
          {subElements4.map((element,index)=>{
            return <p key={index} className="leading-7 text-sm">{element}</p>
           })}
        </div>
        <div className="flex-1">
          <h1  className="font-bold"> COMPANY INFO</h1>
          {subElements5.map((element,index)=>{
            return <p key={index} className="leading-7 text-sm">{element}</p>
           })}
        </div>
        <div className="flex-1">
          <h1  className="font-bold">FOLLOW US</h1>
        </div>
        </Row>
        </div>:
        <div className=" w-full grid grid-cols-2  gap-4 bg-black text-white pt-8">
          {mobileScreenSubElements.map((element,index)=>{
            return <p key={index} className="leading-7 text-sm  text-center  ">{element}</p>
           })}
          </div>}
    </>
    
  );
};

export default Footer;
