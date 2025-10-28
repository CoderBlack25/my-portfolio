import React from "react";

const ProjectLink = ({ href, text, imgSrc, alt }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center text-[#D3E97A] font-manrope font-bold underline underline-offset-6 gap-1.5 text-sm md:text-base"
    >
      <h2>{text}</h2>
      <img src={imgSrc} alt={alt} className="w-3 md:w-auto" />
    </a>
  );
};

export default ProjectLink;
