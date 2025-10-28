import React from "react";

const MyCapabilities = () => {
  return (
    <section /*id="stack" className="scroll-mt-32"*/>
      <div>
        <div className="flex flex-col md:flex md:flex-row px-0 md:px-12 pb-30">
          <div className="flex-1">
            <h1 className="font-bebas text-[#FFFFFF] text-[2.6875rem] md:text-[4.75rem] leading-none pb-6">
              MY TECH STACK
            </h1>
          </div>

          <div className="flex flex-col gap-8 flex-1 pl-0 md:pl-64">
            <p className="font-manrope text-[#C7C7C7] text-base md:text-lg">
              I am always looking to add more skills. Morbi egestas neque eu
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
                  className="text-[#ffffff] font-manrope font-bold px-6 py-4 md:px-10 md:py-5 rounded-[6.25rem] border border-[#484848] text-sm md:text-base"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCapabilities;
