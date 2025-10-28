import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section id="about" className="pt-20">
      <div>
        <div className="px-6 md:px-24 py-14 border-b border-b-[#484848] md:flex pb-36">
          <div className="md:flex-1">
            <h1 className="font-bebas text-[#FFFFFF] text-[2.6875rem] pb-4 md:text-[4.75rem] leading-none">
              ABOUT ME
            </h1>
          </div>

          <div className="md:flex-1 space-y-6">
            <h2 className="font-manrope text-[#FFFFFF] text-2xl md:text-[2rem] font-medium text-justify">
              I am a front-end developer based in Nigeria and have a
              Biochemistry background.
            </h2>

            <p className="font-manrope text-[#C7C7C7] text-base md:text-lg text-justify">
              I am a front-end developer based in Nigeria looking for exciting
              opportunities. Has Biochemistry background. Likes to focus on
              proper design execution and accessibility when developing.
              Passionate and curious about solving problems. Currently, I'm
              exploring React, Webflow, Framer and a bit of Python. While I am
              not programming, I enjoy watching Movies, Reading and Exloring the
              Web3 Space. Learning more to improve skill.
            </p>

            <h2 className="font-manrope text-[#FFFFFF] text-2xl md:text-[2rem] font-medium">
              My Capabilities
            </h2>

            <p className="font-manrope text-[#C7C7C7] text-base md:text-lg text-justify">
              I am always looking to add more skills.Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "HTML",
                "CSS",
                "JAVASCRIPT",
                "REACT",
                "FIGMA",
                "TAILWIND CSS",
              ].map((tech) => (
                <button
                  key={tech}
                  className="text-[#ffffff] font-manrope font-bold rounded-[6.25rem] border border-[#484848] px-6 py-4 text-sm md:px-10 md:py-5 md:text-base"
                >
                  {tech}
                </button>
              ))}
            </div>

            <Link
              to="/more-about-me"
              className="text-[#D3E97A] font-manrope font-bold underline underline-offset-6 text-sm md:text-base"
            >
              MORE ABOUT ME
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
