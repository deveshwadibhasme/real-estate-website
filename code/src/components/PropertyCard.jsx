import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faForward } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      key={property.id}
      className="w-full grid grid-cols-1 gap-2 md:w-30 lg:w-96 bg-white shadow-lg rounded-lg p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-70 object-cover rounded-lg "
        />
        <h3 className="text-2xl font-semibold mt-2">{property.title}</h3>
        <p className="text-gray-600">{property.location}</p>
      </div>
      <div>
        {property.twoBHK && (
          <div className="flex justify-between mt-2">
            <span className="text-gray-700 font-semibold ">
               ₹ {property.twoBHK.price}
            </span>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faBed} className="text-gray-500" />
              <span className="text-gray-500 font-serif">
                {property.twoBHK.bedrooms}
              </span>
              <FontAwesomeIcon icon={faBath} className="text-gray-500" />
              <span className="text-gray-500 font-serif">
                {property.twoBHK.bathrooms}
              </span>
            </div>
          </div>
        )}
        {property.threeBHK && (
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-700 font-semibold">
               ₹ {property.threeBHK.price}
            </span>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faBed} className="text-gray-500" />
              <span className="text-gray-500 font-serif">
                {property.threeBHK.bedrooms}
              </span>
              <FontAwesomeIcon icon={faBath} className="text-gray-500" />
              <span className="text-gray-500 font-serif">
                {property.threeBHK.bathrooms}
              </span>
            </div>
          </div>
        )}
      </div>
      <Link className="p-2 h-10 px-4 self-end rounded-xl text-center uppercasse hover:bg-green-600 text-white bg-blue-400 font-semibold flex items-center justify-center">
        <FontAwesomeIcon icon={faForward} className="mr-2" />
        Proceed
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
