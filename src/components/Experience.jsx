import React from "react";
import MyExperience from "./MyExperience";

const Experience = () => {
  return (
    <section className="pt-20">
      <div>
        <div className="flex flex-col md:flex md:flex-row py-16 px-6 md:px-24 border-b border-b-[#484848] pb-36 overflow-hidden">
          <div className="flex-1">
            <h1 className="font-bebas text-[#FFFFFF] text-[2.6875rem] md:text-[4.75rem] leading-none pb-12">
              MY EXPERIENCE
            </h1>
          </div>

          <div className="flex flex-col gap-8 flex-1 pl-0 md:pl-64">
            <MyExperience
              position="Front-End Intern"
              date="Sep 2023 — Nov 2023"
              company="Roos Tech"
              description="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            <MyExperience
              position="Freelance Developer"
              date="Nov 2023 — Present"
              company="CiTech"
              description="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
