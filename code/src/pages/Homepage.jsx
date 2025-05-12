import React, { useState } from "react";
import AnimatedVideo from "/home-background.mp4";
import SearchFilter from "../components/SearchFilter";
import HomeListing from "../layouts/HomeListing"


const Homepage = () => {


  return (
    <main className="flex flex-col max-w-screen min-h-screen">
      <video className="absolute top-0 left-0 w-full h-full object-cover -z-10 " autoPlay loop  muted >
        <source src={AnimatedVideo} type="video/mp4" />Your browser does not support the video tag.
      </video>
      <div className="relative min-h-screen shaded-bg top-1/2 w-full flex flex-col justify-start pt-50 gap-3 p-3 text-white">
        <h6 className="font-bold">Real Estate Searching Platform</h6>
        <h1 className="mt-2 text-4xl max-w-screen-sm w-full font-bold">
          Find The House of Your Dream Using Our DevineHomz Platform
        </h1>
        <SearchFilter />
      </div>
     <HomeListing />
    </main>
  );
};

export default Homepage;
