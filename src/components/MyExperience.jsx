import React from "react";

const MyExperience = (props) => {
  return (
    <div>
      <div>
        <div className="space-y-6">
          <div className="flex flex-col md:flex md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
            <h2 className="text-[#FFFFFF] font-manrope font-medium text-lg md:text-2xl">
              {props.position}
            </h2>
            <p className="font-manrope text-[#C7C7C7] text-base md:text-lg">
              {props.date}{" "}
            </p>
          </div>

          <p className="text-[#D3E97A] text-base md:text-lg font-manrope font-semibold">
            {props.company}
          </p>

          <p className="font-manrope text-[#C7C7C7] text-base md:text-lg">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
