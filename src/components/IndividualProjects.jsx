import React from "react";
import LiveDemo from "../assets/Vector.png";
import GitHubCode from "../assets/Vector (1).png";
import ProjectLink from "./ProjectsLink.jsx";

const IndividualProjects = (props) => {
  return (
    <div>
      <div className="flex flex-col gap-16 pt-16 md:flex md:flex-row md:justify-between md:items-center">
        <div
          className="bg-[#1A1A1A] w-[343px] h-[343px]
            sm:w-[400px] sm:h-[400px]
            md:w-[500px] md:h-[500px]
            lg:w-[600px] lg:h-[600px]
            rounded-xl flex justify-center items-center mx-auto md:mx-0"
        >
          {props.projectimage}
        </div>

        <div className="font-manrope py-10 md:flex-1 md:pl-36 text-justify">
          <h1 className="text-2xl md:text-[2rem] font-medium text-[#FFFFFF] pb-7">
            {props.projectname}
          </h1>

          <p className="text-[#C7C7C7] text-base md:text-lg pb-7">
            {props.projectdescription}
          </p>

          <div className="border-b border-b-[#484848]">
            <h2 className="font-semibold text-[#FFFFFF] pb-7">PROJECT INFO</h2>
          </div>

          <div className="flex justify-between font-medium text-[#C7C7C7] border-b border-b-[#484848] py-7">
            <p>Client</p>

            <p>{props.client}</p>
          </div>

          <div className="flex justify-between font-medium text-[#C7C7C7] border-b border-b-[#484848] py-7">
            <p>Year</p>

            <p>{props.year}</p>
          </div>

          <div className="flex justify-between font-medium text-[#C7C7C7] border-b border-b-[#484848] py-7">
            <p>Role</p>

            <p>{props.role}</p>
          </div>

          <div className="flex gap-6 pt-8">
            <ProjectLink
              href={props.demoLink}
              text="LIVE DEMO"
              imgSrc={LiveDemo}
              alt="view project demo"
            />
            <ProjectLink
              href={props.githubLink}
              text="SEE ON GITHUB"
              imgSrc={GitHubCode}
              alt="view project code"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProjects;
