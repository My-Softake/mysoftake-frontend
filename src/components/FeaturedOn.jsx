import React from "react";
import MarqueeLogos from "./MarqueeLogos";

const FeaturedOn = () => {
  const featured = ["/images/partner one.png", "/images/partner two.png", "/images/partner three.png","/images/partner four.png","/images/partner five.png"];
  return (
    <div className="">
      <div className="container mx-auto px-10">
        <h3 className="font-semibold text-3xl text-black text-center">We Featured On</h3>
        <div className="">
            <MarqueeLogos logos={featured} speed="15s" bgColor="#FFFFFF"/>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
