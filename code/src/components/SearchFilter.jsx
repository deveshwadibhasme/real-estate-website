import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBuilding, faCity } from "@fortawesome/free-solid-svg-icons";

const SearchFilter = () => {
    const selectValue = {
        type: ["Prices", "50 Lakh - 1 Crore", "1 Crore - 2 Crore", "2 Crore - 5 Crore", "5 Crore - 7 Crore"],
        cities: ["All Cities", "Laxminagar", "Manewada"],
    };

    const [selectedType, setSelectedType] = useState(selectValue.type[0]);
    const [selectedCity, setSelectedCity] = useState(selectValue.cities[0]);
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const handleTypeSelect = (type) => {
        setSelectedType(type);
        setIsTypeDropdownOpen(false);
        setIsCityDropdownOpen(false);
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        setIsCityDropdownOpen(false);
        setIsTypeDropdownOpen(false);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const formData = {
            searchInput,
            selectedType,
            selectedCity,
        };
        console.log("Form Data:", formData);
    };

    return (
        <form
            className="max-w-screen-lg w-full flex flex-wrap md:flex-nowrap bg-white text-slate-900 rounded-lg shadow-lg mt-4"
            onSubmit={handleSearch}
        >
            <div className="relative w-full md:w-[40%] flex items-center">
                <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute left-3 text-gray-500"
                />
                <input
                    type="text"
                    placeholder="Search..."
                    className="h-14 md:h-18 border-b md:border-r-2 md:border-b-0 border-slate-400 outline-none w-full pl-10 pr-4 font-semibold text-base md:text-lg rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
            <div className="relative w-full md:w-[20%]">
                <div
                    className="h-14 md:h-18 border-b md:border-r-2 md:border-b-0 border-slate-400 outline-none p-2 font-semibold cursor-pointer flex items-center justify-between px-8"
                    onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                >
                    <FontAwesomeIcon icon={faBuilding} className="mr-2 text-gray-500" />
                    {selectedType}
                </div>
                {isTypeDropdownOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10">
                        {selectValue.type.map((type) => (
                            <div
                                key={type}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleTypeSelect(type)}
                            >
                                {type}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="relative w-full md:w-[20%]">
                <div
                    className="h-14 md:h-18 border-b md:border-r-2 md:border-b-0 border-slate-400 outline-none p-2 font-semibold cursor-pointer flex items-center justify-between px-8"
                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                >
                    <FontAwesomeIcon icon={faCity} className="mr-2 text-gray-500" />
                    <span>{selectedCity}</span>
                </div>
                {isCityDropdownOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10">
                        {selectValue.cities.map((city) => (
                            <div
                                key={city}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleCitySelect(city)}
                            >
                                {city}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <button
                type="submit"
                className="h-14 cursor-pointer md:h-18 bg-blue-500 text-white font-semibold w-full md:w-[20%] rounded-b-lg md:rounded-r-lg md:rounded-b-none hover:bg-blue-600 transition-all"
            >
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Search
            </button>
        </form>
    );
};

export default SearchFilter;
