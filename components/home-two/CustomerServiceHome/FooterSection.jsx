import Image from "next/image";
import logo from "../../../public/images/1ten365logo.png";

const FooterSection = () => {
  return (
    <div className="bg-gray-700 lg:py-8">
      <div className="relative bg-slate-400 lg:w-[320px] py-5 flex justify-center items-center lg:ml-[-30px]">
        <Image
          src={logo}
          alt="Image"
          width={250}
          height={140}
          className=""
        ></Image>
      </div>
    </div>
  );
};

export default FooterSection;
