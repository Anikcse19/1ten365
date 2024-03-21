import Logo from "@/components/shared/Header/Logo/Logo";
import Navbar from "@/components/shared/Header/Navbar/Navbar";
import { API_BASE_URL } from "@/config";
import axios from "axios";
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "anik",
  },
];

const SiteAdminPage = () => {
  const [adminType, setAdminType] = useState("");
  const [adminId, setAdminId] = useState("");
  const [searchedResult, setSearchedResult] = useState({});

  // useEffect(()=>{
  //   fetch(`${API_BASE_URL}/admins/types`,{
  //     method:'POST',
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-type':'application/json',
  //       Authrization:`Bearer `
  //     }
  //   }).then(res=>res.json()).then(data=>console.log(data))
  // },[])

  const handleAdminSearch = () => {
    axios
      .get(`${API_BASE_URL}/admins/${adminId}?type=${adminType}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setSearchedResult(res.data);
      });
  };
  return (
    <div>
      <Logo></Logo>
      <Navbar />
      {/*Site admin config  start*/}
      <div className="w-full  mt-12">
        {/* agent/admin search start */}
        <div className="w-[60%] mx-auto bg-white flex flex-col items-center justify-center gap-6 py-5">
          <div>
            <p className="text-base lg:text-xl lg:font-bold">
              এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ
            </p>
          </div>

          <div className="flex items-center gap-6">
            <label htmlFor="" className="text-base lg:text-lg">
              এজেন্ট টাইপ
            </label>
            <select
              onChange={(e) => setAdminType(e.target.value)}
              name=""
              id=""
              className="outline-none border-2 border-black px-2 py-1 w-[220px]"
            >
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
          </div>
          <div className="flex items-center gap-5">
            <label htmlFor="" className="text-base lg:text-lg">
              {" "}
              এজেন্ট আইডি
            </label>
            <input
              onChange={(e) => setAdminId(e.target.value)}
              className="outline-none border-2 border-black px-2 py-1"
              type="text"
              name=""
              id=""
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
            1ten365 Site Admin List
          </p>
        </div>
        {/* user alert end*/}

        {/* admin table start */}
        {}
        {/* admin table end */}
      </div>
    </div>
  );
};

export default SiteAdminPage;
