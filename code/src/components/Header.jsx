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
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      title: "Listings",
      link: "/listing",
      icon: <FontAwesomeIcon icon={faList} />,
    },
    {
      title: "Agents List",
      link: "/agents",
      icon: <FontAwesomeIcon icon={faPersonDotsFromLine} />,
    },
    {
      title: "About Us",
      link: "/about-us",
      icon: <FontAwesomeIcon icon={faInfoCircle} />,
    },
    {
      title: "Contact Us",
      link: "/contact-us",
      icon: <FontAwesomeIcon icon={faContactBook} />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full pt-5 shadow-md z-50">
      <div className="flex items-center justify-between flex-col bg-slate-800 md:bg-transparent md:flex-row min-h-15 text-white px-0 md:px-5">
        <div className="max-w-25 h-20 w-full m-1 flex items-center justify-center">
          <img src={logo} className="bg-white/60" alt="logo" />
        </div>
        <nav className="flex overflow-x-auto justify-between max-w-4xl md:max-w-2xl w-full border-t-0 md:border-t-2">
          {tabs.map((tab) => (
            <Link
              key={tab.title}
              to={tab.link}
              className="flex items-center text-lg md:bg-blue-500/70 flex-shrink-0 px-4 py-2 text-white hover:bg-blue-600 transition duration-300 ease-in-out whitespace-nowrap"
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
