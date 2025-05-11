import logo from "/public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactBook,
  faHome,
  faInfoCircle,
  faList,
  faPersonDotsFromLine,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const tabs = [
    {
      title: "Home",
      link: "/",
      icon: <FontAwesomeIcon className= "text-sm md:text-lg"  icon={faHome} />,
    },
    {
      title: "Listings",
      link: "/listing",
      icon: <FontAwesomeIcon className= "text-sm md:text-lg" icon={faList} />,
    },
    {
      title: "Agents List",
      link: "/agents",
      icon: <FontAwesomeIcon className= "text-sm md:text-lg" icon={faPersonDotsFromLine} />,
    },
    {
      title: "About Us",
      link: "/about-us",
      icon: <FontAwesomeIcon className= "text-sm md:text-lg" icon={faInfoCircle} />,
    },
    {
      title: "Contact Us",
      link: "/contact-us",
      icon: <FontAwesomeIcon className= "text-sm md:text-lg" icon={faContactBook} />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50">
      <div className="flex items-center justify-between flex-col bg-white md:bg-transparent md:flex-row min-h-15 text-white px-0 md:px-5">
        <div className="max-w-25 h-20 w-full mb-2">
          <img src={logo} className="bg-white/60 rounded-full  object-cover" alt="logo" />
        </div>
        <nav className="flex overflow-x-auto scroll-hide gap-2 max-w-screen-lg md:max-w-screen-md md:justify-end w-full mb-2">
          {tabs.map((tab) => (
            <Link
              key={tab.title}
              to={tab.link}
              className="flex items-center text-sm md:text-lg md:bg-blue-500/70 flex-shrink-0 px-2 md:px-4 py-1 md:py-2 rounded-2xl text-white bg-blue-900  hover:bg-blue-600 transition duration-300 ease-in-out whitespace-nowrap"
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
