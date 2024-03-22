import Logo from "@/components/shared/Header/Logo/Logo";
import MobileNav from "@/components/shared/Header/Navbar/MobileNav";
import Navbar from "@/components/shared/Header/Navbar/Navbar";
import base_url from "@/utils/Url";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/1ten365logo.png"



const ls=typeof window != "undefined" ? window.localStorage : null
const token=ls?.getItem('token')
const SuperAgent = () => {
  const [adminType, setAdminType] = useState("");
  const [adminId, setAdminId] = useState("");
  const [searchedResult, setSearchedResult] = useState({});
  const [types,setTypes]=useState([])
  const [subAdmins,setSubAdmins]=useState([])

  const router=useRouter()

    useEffect(()=>{

      fetch(`${base_url}/admins/types`,{
        method:'GET',
        headers:{
          'Accept':'application/json',
          // 'Content-type':'application/json',
          'Authorization':`Bearer ${token}`
        }
      }).then(res=>res.json()).then(data=>{
        setTypes(data.types)
        setAdminType(types[2])
      })
  
      fetch(`${base_url}/admins?type=সাব এডমিন`,{
        method:'GET',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json',
          'Authorization':`Bearer ${token}`
        }
      }).then(res=>res.json()).then(data=>setSubAdmins(data.admins))
    },[])

    console.log(subAdmins);


    const handleAdminSearch = () => {
      console.log(adminType,adminId);
        axios
          .get(`${base_url}/admins/${adminId}?type=${adminType}`, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res?.data);
            setSearchedResult(res.data);
          });
      };
  return (
    <div>
      <>
      <div className="hidden lg:block">
        <Logo />
        <Navbar />
      </div>
      <div className="flex lg:hidden justify-between items-center shadow-md px-4 py-2">
        <Image width={120} height={90} src={logo} alt="" />
        <MobileNav />
      </div>
      </>


      {/*Site admin config  start*/}
      <div className="w-full  mt-12">
        {/* agent/admin search start */}
        <div className="w-[80%] mx-auto bg-white flex flex-col items-center justify-center gap-3 lg:gap-6 py-5">
          <div>
            <p className="text-base lg:text-xl font-semibold lg:font-bold">
              এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
            <label htmlFor="" className="text-base lg:text-lg">
              এজেন্ট টাইপ
            </label>
            <select
            value={adminType}
              onChange={(e) => setAdminType(e.target.value)}
              className="outline-none border-2 border-black px-2 py-1 w-[220px]"
            >
              {
              types?.slice(1,5)?.map(type=>(
                <option value={type}>{type}</option>
              ))
             }
            </select>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
            <label htmlFor="" className="text-base lg:text-lg">
              এজেন্ট আইডি
            </label>
            <input
            value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="outline-none border-2 border-black px-2 py-1 w-[220px]"
              type="text"
            />
          </div>
          <div>
            <button
              onClick={handleAdminSearch}
              className="bg-blue-500 px-6 py-1 rounded text-white font-bold"
            >
              Submit
            </button>
          </div>
        </div>
        {/* agent/admin search end */}

        {/* show search result start */}
        <div className="w-[80%] mx-auto bg-white  p-5 my-10">
          {/* show search admin details start*/}
          <p className="text-center text-base lg:text-lg font-bold mb-3">
            উনি 1ten365 এর একজন অনলাইন সাব এডমিন নাম্বার 12
          </p>
          <div className=" w-full border border-black flex flex-col p-2">
            {/* 1st row start */}
            <div className="w-full flex border border-black py-3 bg-blue-300">
              <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                <p className="text-black">উনার সাব এডমিন আইডিঃ </p>
              </div>
              <div className=" w-[50%] h-full flex justify-center items-center text-white">
                <p className="text-black">12</p>
              </div>
            </div>
            {/* 1st row end */}

            {/* 2nd row start */}
            <div className=" w-full flex border border-black py-3 bg-blue-400">
            <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                <p className="text-black">উনার হোয়াটসঅ্যাপ নাম্বারঃ</p>
              </div>
              <div className=" w-[50%] h-full flex justify-center items-center text-white">
                <p className="text-black">+90912345</p>
              </div>
            </div>
            {/* 2nd row end */}
          </div>

           {/* show search admin details end*/}

            {/* show parent admin details start*/}
           <p className="text-center text-base lg:text-lg font-bold m-3">
           এই 1ten365 এর অনলাইন সাব এডমিন এর আপলাইনের তথ্যঃ
          </p>
          <p className="text-center text-base lg:text-lg  mb-3">
          উপরের সাব এডমিন এর বিরুদ্ধে অভিযোগ করতে হলে নিচের যে কোন নাম্বার এ হোয়াটসঅ্যাপ এ মেসেজ দিলেই হবে
          </p>
          <div className=" w-full border border-black flex flex-col p-2">
            {/* 1st row start */}
            <div className="w-full flex border border-black py-3 bg-blue-300">
              <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                <p className="text-black">উনার এডমিন এর এডমিন আইডিঃ </p>
              </div>
              <div className=" w-[50%] h-full flex justify-center items-center text-white">
                <p className="text-black">2</p>
              </div>
            </div>
            {/* 1st row end */}

            {/* 2nd row start */}
            <div className=" w-full flex border border-black py-3 bg-blue-400">
            <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                <p className="text-black">উনার এডমিন এর হোয়াটসঅ্যাপ নাম্বারঃ</p>
              </div>
              <div className=" w-[50%] h-full flex justify-center items-center text-white">
                <p className="text-black">+90912345</p>
              </div>
            </div>
            {/* 2nd row end */}
          </div>
          {/* show parent admin details end*/}
          

        </div>

        {/* show search result end */}

        {/* user alert start*/}
        <div className="w-[80%] mx-auto bg-white border-l-4 border-gray-500  p-5 my-10">
          <p className="text-base lg:text-xl font-bold">
            এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!
          </p>
          <p>
            **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন 1ten365.com
            **হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা
            যাবে না এবং করলে তা গ্রহনযোগ্য হবে না।
          </p>
          <p className="text-center mt-5 text-lg lg:text-2xl font-bold">
            1ten365 Super Agent List
          </p>
        </div>
        {/* user alert end*/}

        {/* admin table start */}
        {}
        {/* admin table end */}
      </div>
    </div>
  )
}

export default SuperAgent
