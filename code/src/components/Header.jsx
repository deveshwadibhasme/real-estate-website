import { useState } from "react";
import logo from "/public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactBook,
  faHome,
  faInfoCircle,
  faList,
  faPersonDotsFromLine,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    {
      title: "Home",
      link: "/",
      icon: <FontAwesomeIcon className="text-sm md:text-lg" icon={faHome} />,
    },
    {
      title: "Listings",
      link: "/listing",
      icon: <FontAwesomeIcon className="text-sm md:text-lg" icon={faList} />,
    },
    {
      title: "Agents List",
      link: "/agents",
      icon: (
        <FontAwesomeIcon className="text-sm md:text-lg" icon={faPersonDotsFromLine} />
      ),
    },
    {
      title: "About Us",
      link: "/about-us",
      icon: <FontAwesomeIcon className="text-sm md:text-lg" icon={faInfoCircle} />,
    },
    {
      title: "Contact Us",
      link: "/contact-us",
      icon: <FontAwesomeIcon className="text-sm md:text-lg" icon={faContactBook} />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between relative bg-white md:bg-transparent min-h-15 text-white px-5">
        <div className="max-w-25 h-22">
          <img
            src={logo}
            className="md:bg-white rounded-full object-cover"
            alt="logo"
          />
        </div>
        <button
          className="md:hidden text-blue-900 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        <nav
          className={`${
            menuOpen ? "flex translate-y-0" : "-translate-y-full"
          } md:flex md:translate-y-0 flex-col md:flex-row gap-2 absolute top-full right-0 p-2 md:relative w-full md:max-w-screen-md md:justify-end bg-white transition-transform duration-300 ease-in-out md:bg-transparent -z-10 md:z-0`}
        >
          {tabs.map((tab) => (
            <Link
              key={tab.title}
              to={tab.link}
              className="flex items-center text-sm md:text-lg md:bg-blue-500/70 flex-shrink-0 px-2 md:px-4 py-1 md:py-2 md:rounded-2xl text-white bg-blue-900 hover:bg-blue-600 transition duration-300 ease-in-out whitespace-nowrap"
            >
              {tab.icon}
              <span className="ml-2 w-full">{tab.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
