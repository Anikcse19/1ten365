import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaThList } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import img1 from "../../../public/images/home img2.jpg";

const ls = typeof window != "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");

const RandomMasterAgent = () => {
  const [admins, setAdmins] = useState();
  const router=useRouter()
  useEffect(() => {
    fetch(`https://test.aglist1ten365.com/api/admins?type=এজেন্ট`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAdmins(data?.admins))
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors
  }, []);

  console.log(admins);

  return (
    <div className="border mt-1">
      <div className="flex justify-between items-center py-4 px-5">
        <h1 className="text-lg font-semibold uppercase">RANDOM MASTER AGENT</h1>
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
        <button onClick={()=>router.push('/Admins/Agent')} className="flex items-center uppercase font-semibold gap-x-1.5 border px-2.5 bg-red-700 py-1 text-white">
         Agent <FaArrowRightLong />
        </button>
      </div>

      <div className="flex items-center gap-x-4 p-5">
        {admins?.map((item, i) => (
          <Link href="" key={i} className="border pb-5">
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
                Agent
              </Link>
            </div>

            <div className="px-2">
              <h2 className="font-semibold mt-7 hover:text-red-700">
                এজেন্ট এর তথ্য {item?.profile?.user_id}
              </h2>
              <p className="text-xs font-semibold text-slate-400 mt-2">
                ADMINISTRATOR
                <span className="font-normal ml-1">
                  {item?.profile?.created_at.slice(0, 10)}
                </span>
              </p>
              <p className="mt-5 text-center">
                এজেন্ট আইডিঃ {item?.profile?.user_id} <br />{" "}
                হোয়াটসঅ্যাপ নাম্বারঃ <br />
                <span className="text-red-700 font-semibold">
                  {item?.profile?.phone}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RandomMasterAgent;
