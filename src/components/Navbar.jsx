import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "about",
    },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Contact",
      route: "contact",
    },
  ];

  function toggleTheme() {
    if (darkMode === true) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${
          darkMode
            ? "bg-white/10 border-white/20"
            : "bg-black/5 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center cursor-pointer">
              <a
                href="/E-Portfolio"
                className={`text-xl font-bold transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
                style={{
                  fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/icons/logo3.svg`}
                  alt="Torki"
                  className="h-12 w-auto"
                />
              </a>
            </div>
            
            <div className="hidden md:flex justify-between items-center w-full md:w-auto">
              <ul className="flex flex-row space-x-8">
                {links.map((el, index) => (
                  <li key={index} className="cursor-pointer">
                    <Link
                      to={el.route}
                      activeClass="text-blue-500"
                      spy={true}
                      smooth={true}
                      className={`block py-2 px-3 text-lg font-medium transition-all duration-300 hover:text-blue-500 rounded-lg ${
                        darkMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"
                      }`}
                      style={{
                        fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                      }}
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div 
                onClick={() => toggleTheme()}
                className={`ml-8 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-110 ${
                  darkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {darkMode ? (
                  <img
                    src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                    className="w-6 h-6"
                    alt="Light Mode"
                  />
                ) : (
                  <img
                    src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                    className="w-6 h-6"
                    alt="Dark Mode"
                  />
                )}
              </div>
            </div>

            <div className="flex md:hidden items-center space-x-4">
              <div 
                onClick={() => toggleTheme()}
                className={`p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  darkMode ? "bg-white/10" : "bg-gray-100"
                }`}
              >
                {darkMode ? (
                  <img
                    src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                    className="w-5 h-5"
                    alt="Light Mode"
                  />
                ) : (
                  <img
                    src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                    className="w-5 h-5"
                    alt="Dark Mode"
                  />
                )}
              </div>

              <Hamburger
                toggled={toggle}
                size={24}
                duration={0.8}
                distance="lg"
                toggle={setToggle}
                color={darkMode ? "#ffffff" : "#000000"}
              />
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden backdrop-blur-md border-b ${
                darkMode
                  ? "bg-white/10 border-white/20"
                  : "bg-white/50 border-gray-200"
              }`}
            >
              <div className="px-4 py-4 space-y-2">
                {links.map((el, index) => (
                  <Link
                    key={index}
                    to={el.route}
                    activeClass="text-blue-500"
                    className={`block py-3 px-4 text-lg font-medium transition-all duration-300 rounded-lg ${
                      darkMode 
                        ? "text-white hover:bg-white/10 hover:text-blue-400" 
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                    }`}
                    style={{
                      fontFamily: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}
                    spy={true}
                    smooth={true}
                    onClick={() => setToggle(false)}
                  >
                    {el.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
