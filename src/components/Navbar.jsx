import React from "react";
import MyImage from "../assets/chisom.png";
import LinkedIn from "../assets/Frame 3.svg";
import GitHub from "../assets/Frame 4.svg";
import Button from "../assets/button.svg";

const Navbar = () => {
  return (
    <div>
      <div className="px-14 pt-8 pb-36 border-b border-b-[#484848]">
        <div className="text-[#C7C7C7] flex justify-between items-center">
          <a href="#" className="font-bebas text-[32px]">
            CHUKWUMA CHISOM
          </a>

          <nav className="space-x-6 font-inter font-medium">
            <a href="#work">Work</a>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src={MyImage} alt="My Image" className="mt-40 mb-8" />

          <h1 className="text-[#FFFFFF] text-[6.3125rem] font-bebas leading-[90%]">
            HI, I AM
          </h1>

          <h1 className="text-[#FFFFFF] text-[6.3125rem] font-bebas leading-[90%]">
            CHUKWUMA CHISOM.
          </h1>

          <p className="text-[#C7C7C7] font-manrope text-lg">
            A Nigeria-based front-end developer passionate about
          </p>

          <p className="text-[#C7C7C7] font-manrope text-lg mb-8">
            building accessible and user friendly web products.
          </p>

          <div className="flex gap-3">
            <a href="mailto:koderblac@gmail.com">
              <img src={Button} alt="Contact Me" />
            </a>

            <a
              href="http://www.linkedin.com/in/chisom-chukwuma-80b033205"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="My LinkedIn" />
            </a>

            <a
              href="https://github.com/CoderBlack25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHub} alt="My Github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
