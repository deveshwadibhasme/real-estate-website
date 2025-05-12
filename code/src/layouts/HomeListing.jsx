import React from "react";
import estateData from "../data/estate-data";
import PropertyCard from "../components/PropertyCard";
import { Link } from "react-router-dom";

const HomeListing = () => {

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
      <Link to={'/listing'} className="py-2 px-4 mx-auto rounded-sm text-center text-xl hover:bg-green-600 text-white bg-blue-800 mt-10">View More Listings</Link>
    </div>
  );
};

export default HomeListing;
