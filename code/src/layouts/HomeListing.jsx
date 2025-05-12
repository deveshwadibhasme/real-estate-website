import React from "react";
import estateData from "../data/estate-data";
import PropertyCard from "../components/PropertyCard";

const HomeListing = () => {
  return (
    <div className="flex flex-col min-h-screen mt-10 max-w-screen-xl mx-auto w-full p-3 gap-3 text-slate-900">
      <h3 className="text-sm uppercase text-blue-600">Browse Hot Offers</h3>
      <h2 className="text-4xl text-main font-bold">Latest Properties</h2>
      <div className="mx-auto max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-3 gap-3 justify-between mt-10 justify-items-center">
        {estateData
          .filter((pro) => pro.id <= 3)
          .map((property) => (
            <PropertyCard property={property}/>
          ))}
      </div>
    </div>
  );
};

export default HomeListing;
