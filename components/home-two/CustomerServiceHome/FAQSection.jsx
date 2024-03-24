import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaThList } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import img1 from "../../../public/images/home img1.jpg";

const FAQSection = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-4 px-5">
        <h1 className="text-xl font-bold uppercase">FAQ</h1>
        <div className="flex items-center">
          <button className="border px-4 p-1 flex items-center text-sm gap-x-1 uppercase bg-red-700 text-white">
            <IoGridSharp className="text-xs" /> Grid
          </button>
          <button className="border px-4 p-1 flex items-center text-sm gap-x-1 uppercase">
            <FaThList className="text-xs" /> List
          </button>
        </div>
      </div>

      <div className="bg-slate-200 h-[55px] flex items-center px-5">
        <button className="flex items-center uppercase font-semibold gap-x-1.5 border px-2.5 bg-red-700 py-1 text-white">
          1Ten FAQ <FaArrowRightLong />
        </button>
      </div>

      <div className="p-5">
        <div className="relative ">
          <Image
            src={img1}
            alt="Image"
            layout="responsive"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
          ></Image>

          <Link
            href=""
            className="absolute -bottom-2.5 left-5 bg-white border border-slate-500 px-2 py-[2px] text-xs hover:bg-red-700 hover:text-white uppercase"
          >
            Master Agent
          </Link>
        </div>

        <h2 className="mt-7 text-lg font-semibold">1TEN প্রক্সি লিঙ্ক</h2>

        <div className="mt-8">
          <p className="border-b flex justify-between items-center pb-1 text-[12px] font-semibold pr-20">
            <span>ভেল্কি সাইটের মেইন লিঙ্কঃ</span>
            <span className=" text-red-600">www.velki.live</span>
          </p>
          <p className="mt-1 border-b flex justify-between items-center pb-1 text-[12px] font-semibold pr-20">
            <span>ভেল্কি সাইটের মেইন লিঙ্কঃ</span>
            <span className=" text-red-600">www.nayaludis.com</span>
          </p>
          <p className="mt-1 border-b flex justify-between items-center pb-1 text-[12px] font-semibold pr-20">
            <span>ভেল্কি সাইটের প্রক্সী লিঙ্ক ১ঃ</span>
            <span className=" text-red-600">www.velki365.live</span>
          </p>
          <p className="mt-1 border-b flex justify-between items-center pb-1 text-[12px] font-semibold pr-20">
            <span>ভেল্কি সাইটের প্রক্সী লিঙ্ক ২ঃ</span>
            <span className=" text-red-600">www.velkiex123.live</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        {Array.from({ length: 7 }).map((item, i) => (
          <div key={i} className="flex items-center gap-x-5 border-t p-5">
            <Image src={img1} alt="Image" width={140} height={100}></Image>

            <div>
              <Link
                href=""
                className=" bg-white border border-slate-500 px-1.5 text-xs hover:bg-red-700 hover:text-white uppercase"
              >
                1TEN FAQ
              </Link>

              <p className="mt-2 font-semibold hover:text-red-600 text-sm">
                ভেল্কি তে কিভাবে লেনদেন করবেন?
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
