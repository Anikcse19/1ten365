import React from "react";
import logo from "../../../public/images/1ten365logo.png";
import Image from "next/image";

const LogoSection = () => {
  return (
    <div className=" border-b-2 border-red-500">
      <div className="w-[1170px] mx-auto flex items-center justify-between  py-4">
        <Image src={logo} width={200} />

        <div className="w-[85px] h-[85px] h-ful flex flex-col justify-center items-center bg-gray-200">
          <h1 className="text-[45px] font-semibold leading-none">23</h1>
          <p className="text-sm">SAT, MAR</p>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
