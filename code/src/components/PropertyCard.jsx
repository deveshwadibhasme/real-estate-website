import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath } from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({property}) => {
  return (
    <div
      key={property.id}
      className="w-full grid grid-cols-1 gap-2 md:w-30 lg:w-80 bg-white shadow-lg rounded-lg p-4"
    >
      <div>
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-xl font-semibold mt-2">{property.title}</h3>
        <p className="text-gray-600">{property.location}</p>
      </div>
      <div>
        {property.twoBHK && (
          <div className="flex justify-between mt-2">
            <span className="text-gray-700 font-semibold">
              2BHK : {property.twoBHK.price}
            </span>
            <FontAwesomeIcon icon={faBed} className="text-gray-500" />
            <span className="text-gray-500">{property.twoBHK.bedrooms}</span>
            <FontAwesomeIcon icon={faBath} className="text-gray-500" />
            <span className="text-gray-500">{property.twoBHK.bathrooms}</span>
          </div>
        )}
        {property.threeBHK && (
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-700 font-semibold">
              3BHK : {property.threeBHK.price}
            </span>
            <FontAwesomeIcon icon={faBed} className="text-gray-500" />
            <span className="text-gray-500">{property.threeBHK.bedrooms}</span>
            <FontAwesomeIcon icon={faBath} className="text-gray-500" />
            <span className="text-gray-500">{property.threeBHK.bathrooms}</span>
          </div>
        )}
      </div>
      <Link className="p-2 h-10 px-4 self-end rounded-xl text-center uppercasse hover:bg-green-600 text-white bg-blue-400 font-semibold">
        Proceed
      </Link>
    </div>
  );
};

export default PropertyCard;
