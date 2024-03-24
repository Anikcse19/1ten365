import Image from "next/image";
import logo from "../../../public/images/1ten365logo.png";

const FooterSection = () => {
  return (
    <div className="bg-black py-8">
      <div className="relative bg-slate-900 w-[320px] py-5 flex justify-center items-center ml-[-30px]">
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
