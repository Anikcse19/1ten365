import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const ServiceCard = ({item}) => {



  return (
    <div className="border flex flex-col items-center justify-center gap-y-5">
      <div className="relative">
        <Image
          src={item.img}
          alt="Next Image"
          layout="responsive"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
        ></Image>

        <Link
          href=""
          className="absolute -bottom-2.5 left-5 bg-white border border-slate-500 px-2 py-[2px] text-xs hover:bg-red-700 hover:text-white uppercase"
        >
          Agent
        </Link>
      </div>

      <h3 className=" hover:text-red-700  font-semibold">
        {item.title}
      </h3>

      <p className="text-sm text-center">
        {item.des}
      </p>

      <div className="w-full">
        <button className="mt-8 text-sm bg-gray-100 hover:bg-gray-300 w-full py-2 border border-slate-400">
          Read More...কাস্টমার সার্ভিস লিষ্ট
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
