import React, { useState } from "react";
import AnimatedVideo from "/home-background.mp4";
import SearchFilter from "../components/SearchFilter";
import estateData from "../data/estate-data";
import { Link } from "react-router-dom";


const Homepage = () => {


  return (
    <main className="flex flex-col max-w-screen min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
        autoPlay
        loop
        muted
      >
        <source src={AnimatedVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative min-h-screen shaded-bg top-1/3 w-full flex flex-col justify-start pt-40 gap-3 p-3 text-white">
        <h6 className="font-bold">Real Estate Searching Platform</h6>
        <h1 className="mt-2 text-4xl max-w-screen-sm w-full font-bold">
          Find The House of Your Dream Using Our DevineHomz Platform
        </h1>
        <SearchFilter />
      </div>
      <div className="flex flex-col min-h-screen mt-10 max-w-screen-xl mx-auto w-full p-3 gap-3 text-slate-900">
        <h3 className="text-sm uppercase text-blue-600">Browse Hot Offers</h3>
        <h2 className="text-4xl text-blue-800 font-bold">Latest Properties</h2>
        <div className="w-full flex flex-col md:flex-row  gap-3 justify-between mt-10">
          {estateData.map((property) => (
            <div
              key={property.id}
              className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-4"
            >
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-2">{property.title}</h3>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-lg font-bold mt-2 mb-5">{property.price}</p>
              <Link className="p-2 px-4 rounded-2xl bg-blue-400">Go with it</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Homepage;
