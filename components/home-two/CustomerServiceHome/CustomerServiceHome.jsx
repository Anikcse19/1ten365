import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMenuOutline } from "react-icons/io5";
import createNewAccount from "../../../public/images/1ten365/10TEN365 ACCOUNT.png";
import conditions from "../../../public/images/1ten365/1ten T&C.png";
import CustomerServiceList from "../../../public/images/1ten365/customer service.png";
import createAccount from "../../../public/images/1ten365/how to create account.png";
import payment from "../../../public/images/1ten365/payment method.png";
import subAdmin from "../../../public/images/1ten365/sub admin list.png";
import superAgent from "../../../public/images/1ten365/super agent list.png";
import FAQSection from "./FAQSection";
import FooterSection from "./FooterSection";
import RandomMasterAgent from "./RandomMasterAgent";
import ServiceCard from "./ServiceCard";

const CustomerServiceHome = () => {
  const router=useRouter()
  const AgentDatas = [
    {
      title: "এজেন্ট লিষ্টঃ",
      link:'/Agent',
      des: "এজেন্ট দের সাথে লেনদেন এর আগে 1TEN নিয়ম গুলো জেনে নিন!! **প্রতারনার হাত থেকে বাচতে",
      img: superAgent,
    },
    {
      title: "সুপার এজেন্ট লিষ্টঃ",
      link:'/SuperAgent',
      des: "এজেন্ট দের সাথে লেনদেন এর আগে 1TEN নিয়ম গুলো জেনে নিন!! **প্রতারনার হাত থেকে বাচতে",
      img: superAgent,
    },
    {
      title: "সাব এডমিন লিষ্টঃ",
      link:'/SubAdmin',
      des: "এজেন্ট দের সাথে লেনদেন এর আগে 1TEN নিয়ম গুলো জেনে নিন!! **প্রতারনার হাত থেকে বাচতে",
      img: subAdmin,
    },
  ];

  const faqs = [
    { title: "1TEN তে কিভাবে লেনদেন করবেন?", url: "/Faq/HowToTransaction", img: payment },
    { title: "কিভাবে একাউন্ট খুলবেন?", url: "/Faq/OpenAccount", img: createAccount },
    {
      title: "একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?",
      url: "/Faq/Condition",
      img: conditions,
    },
  ];

  return (
    <div className="lg:w-[76%] mx-auto px-5 lg:px-0 py-5">
      <div className="flex flex-col lg:flex-row">
        <div className=" lg:w-[70%]">
          <div className="border border-slate-300">
            {/* Main Poster  */}
            <div className="border-b border-slate-300">
              <div className="relative">
                <Image
                onClick={()=>router.push('/Admins/CustomerService')}
                  src={CustomerServiceList}
                  alt="Next Image"
                  layout="responsive"
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full cursor-pointer"
                ></Image>
                <div className="bg-black bg-opacity-[30%] w-full h-[30px] lg:h-[45px] absolute left-0 top-0 flex items-center px-5">
                  <p className="uppercase text-white text-sm lg:text-base">
                    In the spotlight
                  </p>
                </div>

                <Link
                  href="/Admins/Agent"
                  className="absolute -bottom-1.5 left-5 bg-white border border-slate-500 px-2 text-xs hover:bg-red-700 hover:text-white uppercase"
                >
                  Agent
                </Link>
              </div>

              <div className="p-5">
                <h1 className=" lg:text-[30px] font-semibold hover:text-red-700">
                  কাস্টমার সার্ভিস লিষ্ট
                </h1>

                <h2 className=" mt-4 lg:mt-10 lg:text-[25px] text-center font-semibold">
                  1TEN CUSTOMER SERVICE LIST
                </h2>

                <div>
                  <button onClick={()=>router.push('/Admins/CustomerService')} className="mt-8 text-sm bg-gray-100 hover:bg-gray-300 w-full py-2 border border-slate-400">
                    Read More...কাস্টমার সার্ভিস লিষ্ট
                  </button>
                </div>
              </div>
            </div>

            {/* Service List */}
            <div className="p-5">
              <div className="grid lg:grid-cols-3 items-center gap-4">
                {AgentDatas.map((item, i) => (
                  <ServiceCard item={item} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:w-[30%] lg:border-r">
          <div className="bg-black bg-opacity-[10%] w-full h-[45px] px-5 flex justify-center items-center gap-x-2">
            <IoMenuOutline />
            <p className="uppercase ">More News</p>
            <IoMenuOutline />
          </div>
          <div className="flex flex-col">
            {faqs.map((item, i) => (
              <div key={i} className="flex items-center gap-x-5 border-t p-5">
                <Image
                onClick={()=>router.push(`${item?.url}`)}
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

                  <p onClick={()=>router.push(`${item?.url}`)} className="mt-1.5 font-semibold hover:text-red-600 text-xs cursor-pointer">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border p-5 mt-1">
            <Image
            onClick={()=>router.push('/Faq/OpenAccount')}
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

      {/* FAQ Section */}
      <div className="flex flex-col lg:flex-row border">
        <div className="lg:w-[70%]">
          <FAQSection />
        </div>
        <div className="lg:w-[30%] bg-gray-100"></div>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default CustomerServiceHome;
