import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/kite.png"
        productName={"Kite"}
        productDesp={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={""}
        learnMore={""}
        googlePlay={""}
        appleStore={""}
      />
      <RightSection 
        imageUrl="media/console.png"
        productName={"Console"}
        productDesp={
          "The central dashboard for your Sevendha account. Gain insights into your trades and investments with in-depth reports and visualisations. "       
        }
        tryDemo={""}
        learnMore={""}
        googlePlay={""}
        appleStore={""}
      />
      <LeftSection
        imageUrl="media/coin.png"
        productName={"Coin"}
        productDesp={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        tryDemo={""}
        learnMore={""}
        googlePlay={""}
        appleStore={""}
      />
      <RightSection 
        imageUrl="media/kiteconnect.png"
        productName={"Kite Connect API"}
        productDesp={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase. "       
        }
        tryDemo={""}
        learnMore={""}
        googlePlay={""}
        appleStore={""}
      />
      <LeftSection
        imageUrl="media/varsity.png"
        productName={"Varsity mobile"}
        productDesp={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        learnMore={""}
      />
      <Universe />
    </>
  );
}

export default ProductPage;
