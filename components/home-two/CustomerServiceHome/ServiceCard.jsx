import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import img1 from "../../../public/images/home img1.jpg";

const ServiceCard = () => {
  return (
    <div className="border flex flex-col items-center justify-center gap-y-5">
      <div className="relative">
        <Image
          src={img1}
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
        মাস্টার এজেন্ট লিষ্টঃ
      </h3>

      <p className="text-sm text-center">
        এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!! **প্রতারনার
        হাত থেকে বাচতে
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
