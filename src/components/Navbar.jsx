import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import MyImage from "../assets/chisom.png";
import LinkedIn from "../assets/Frame 3.svg";
import GitHub from "../assets/Frame 4.svg";
import Button from "../assets/button.svg";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <section id="home">
      <div className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A] text-[#C7C7C7] flex justify-between items-center px-6 md:px-14 py-6">
        <Link
          to="/"
          onClick={handleHomeClick}
          className="font-bebas text-[1.75rem] md:text-[2rem]"
        >
          KODERBLAC
        </Link>

        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          {menuOpen ? (
            <div className="relative w-6 h-6 transition-all duration-500 ease-in-out">
              <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white rotate-45 transition-all duration-500 ease-in-out"></span>
              <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white -rotate-45 transition-all duration-500 ease-in-out"></span>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center space-y-2 transition-all duration-500 ease-in-out">
              <span className="block w-6 h-0.5 bg-white rounded transition-all duration-500 ease-in-out"></span>
              <span className="block w-6 h-0.5 bg-white rounded transition-all duration-500 ease-in-out"></span>
            </div>
          )}
        </button>

        <nav className="hidden md:flex space-x-6 font-inter font-medium">
          <a href="#work" onClick={handleNavClick}>
            Work
          </a>
          <a href="#about" onClick={handleNavClick}>
            About
          </a>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-[72px] left-0 w-full bg-[#0A0A0A] text-[#C7C7C7] flex flex-col items-start px-6 py-4 space-y-4 font-inter font-medium border-t border-[#484848] z-40"
          >
            <motion.a
              href="#work"
              onClick={handleNavClick}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Work
            </motion.a>
            <motion.a
              href="#about"
              onClick={handleNavClick}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              onClick={handleNavClick}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col justify-center items-center pt-60 pb-36 border-b border-b-[#484848] px-0 md:px-6 text-center">
        <img src={MyImage} alt="My Image" className="mb-8 w-19.25 md:w-auto" />

        <h1 className="text-[#FFFFFF] text-[3.5625rem] md:text-[6.3125rem] font-bebas leading-[90%]">
          HI, I AM
        </h1>
        <h1 className="text-[#FFFFFF] text-[3.5625rem] md:text-[6.3125rem] font-bebas leading-[90%]">
          KODERBLAC.
        </h1>

        <p className="text-[#C7C7C7] font-manrope text-base md:text-lg my-2 md:my-4">
          A Nigeria-based front-end developer passionate about{" "}
          <p>building accessible and user friendly web products.</p>
        </p>
        <p className="text-[#C7C7C7] font-manrope text-base md:text-lg mb-4 md:mb-8"></p>

        <div className="flex gap-3 flex-wrap justify-center">
          <a href="mailto:koderblac@gmail.com">
            <img
              src={Button}
              alt="Contact Me"
              className="w-[130px] md:w-auto"
            />
          </a>

          <a
            href="http://www.linkedin.com/in/chisom-chukwuma-80b033205"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="My LinkedIn" className="w-10 md:w-auto" />
          </a>

          <a
            href="https://github.com/CoderBlack25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="My Github" className="w-10 md:w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
