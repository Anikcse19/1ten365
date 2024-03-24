import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/home img1.jpg";
import CustomerServiceList from "../../../public/images/1ten365/customer service.png";
import img2 from "../../../public/images/home img3.jpg";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import RandomMasterAgent from "./RandomMasterAgent";
import FAQSection from "./FAQSection";
import FooterSection from "./FooterSection";
import { IoMenuOutline } from "react-icons/io5";
import superAgent from "../../../public/images/1ten365/super agent list.png";
import payment from "../../../public/images/1ten365/payment method.png";
import createAccount from "../../../public/images/1ten365/how to create account.png";
import conditions from "../../../public/images/1ten365/1ten T&C.png";
import createNewAccount from "../../../public/images/1ten365/10TEN365 ACCOUNT.png";
import subAdmin from "../../../public/images/1ten365/sub admin list.png";

const CustomerServiceHome = () => {
  const AgentDatas = [
    {
      title: "এজেন্ট লিষ্টঃ",
      des: "এজেন্ট দের সাথে লেনদেন এর আগে 1TEN নিয়ম গুলো জেনে নিন!! **প্রতারনার হাত থেকে বাচতে",
      img: superAgent,
    },
    {
      title: "সুপার এজেন্ট লিষ্টঃ",
      des: "এজেন্ট দের সাথে লেনদেন এর আগে 1TEN নিয়ম গুলো জেনে নিন!! **প্রতারনার হাত থেকে বাচতে",
      img: superAgent,
    },
    {
      title: "সাব এডমিন লিষ্টঃ",
      des: "এজেন্ট দের সাথে লেনদেন এর আগে 1TEN নিয়ম গুলো জেনে নিন!! **প্রতারনার হাত থেকে বাচতে",
      img: subAdmin,
    },
  ];

  const faqs = [
    { title: "1TEN তে কিভাবে লেনদেন করবেন?", url: "", img: payment },
    { title: "কিভাবে একাউন্ট খুলবেন?", url: "", img: createAccount },
    {
      title: "একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?",
      url: "",
      img: conditions,
    },
  ];

  return (
    <div className="w-[76%] mx-auto py-5">
      <div className="flex">
        <div className="w-[70%]">
          <div className="border border-slate-300">
            {/* Main Poster  */}
            <div className="border-b border-slate-300">
              <div className="relative">
                <Image
                  src={CustomerServiceList}
                  alt="Next Image"
                  layout="responsive"
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full"
                ></Image>
                <div className="bg-black bg-opacity-[30%] w-full h-[45px] absolute left-0 top-0 flex items-center px-5">
                  <p className="uppercase text-white">In the spotlight</p>
                </div>

                <Link
                  href=""
                  className="absolute -bottom-1.5 left-5 bg-white border border-slate-500 px-2 text-xs hover:bg-red-700 hover:text-white uppercase"
                >
                  Agent
                </Link>
              </div>

              <div className="p-5">
                <h1 className="text-[30px] font-semibold hover:text-red-700">
                  কাস্টমার সার্ভিস লিষ্ট
                </h1>

                <h2 className="mt-10 text-[25px] text-center font-semibold">
                  1TEN CUSTOMER SERVICE LIST
                </h2>

                <div>
                  <button className="mt-8 text-sm bg-gray-100 hover:bg-gray-300 w-full py-2 border border-slate-400">
                    Read More...কাস্টমার সার্ভিস লিষ্ট
                  </button>
                </div>
              </div>
            </div>

            {/* Service List */}
            <div className="p-5">
              <div className="flex items-center gap-4">
                {AgentDatas.map((item, i) => (
                  <ServiceCard item={item} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30%] border-r">
          <div className="bg-black bg-opacity-[10%] w-full h-[45px] px-5 flex justify-center items-center gap-x-2">
            <IoMenuOutline />
            <p className="uppercase ">More News</p>
            <IoMenuOutline />
          </div>
          <div className="flex flex-col">
            {faqs.map((item, i) => (
              <div key={i} className="flex items-center gap-x-5 border-t p-5">
                <Image
                  src={item.img}
                  alt="Image"
                  width={80}
                  height={50}
                ></Image>

                <div>
                  <div className="flex items-center gap-x-2">
                    <Link
                      href=""
                      className=" bg-white border border-slate-500 px-1 text-xs hover:bg-red-700 hover:text-white uppercase"
                    >
                      Agent
                    </Link>
                    <p className="text-xs">24.03.24</p>
                  </div>

                  <p className="mt-1.5 font-semibold hover:text-red-600 text-xs">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border p-5 mt-1">
            <Image
              src={createNewAccount}
              alt="Image"
              width={550}
              height={550}
            ></Image>
          </div>
        </div>
      </div>

      {/* Random Master Agent */}
      <RandomMasterAgent />

      <div className="flex border">
        <div className="w-[70%]">
          {/* FAQ Section */}
          <FAQSection />
        </div>
        <div className="w-[30%] bg-gray-100"></div>
      </div>

      <FooterSection />
    </div>
  );
};

export default CustomerServiceHome;
