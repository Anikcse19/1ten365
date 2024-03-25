import Layout from "@/components/shared/Layout/Layout";
import base_url from "@/utils/Url";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";


const ls = typeof window != "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");
const searchByNumber = () => {
    const [number,setNumber]=useState("")
    const [searchedResult,setSearchedResult]=useState({})
    const [userNotFound, setUserNotFound] = useState(false);
    const router=useRouter()

    const handleAdminSearch = () => {
      setUserNotFound(false);
      setSearchedResult({});
        axios
          .get(`${base_url}/admins/searchByPhone?phone=${number}`, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            if (res?.data?.admins?.length>0) {
              setSearchedResult(res?.data?.admins[0]);
            } else {
              setUserNotFound(true);
            }
          });
      };

      // console.log(searchedResult[0],'aaaaaa');
  return (
   <Layout>
     <div className="bg-white w-full min-h-screen py-12">
      <div className="w-[90%] py-12 mx-auto  flex flex-col items-center justify-center gap-3 lg:gap-6 border border-gray-500">
          <div>
            <p className="text-base lg:text-xl lg:font-bold">
            ফোন নাম্বার দিয়ে সার্চ করুন:
            </p>
          </div>         
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-base lg:text-lg font-bold">
              এজেন্ট নাম্বার:
            </label>
            <input
            value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="outline-none border-2 border-black px-2 py-1 w-[220px]"
              type="number"
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
        {/* show search result start */}
        {userNotFound && (
            <div className="w-[80%] mx-auto bg-white  p-5 my-10">
              <div className="text-center">
                <p className="text-base md:text-2xl font-bold my-3 ">
                  আপনি যে এজেন্ট খুজচ্ছেন তার নাম আমাদের লিষ্টে নেই
                </p>
                <p className="text-base md:text-lg font-bold my-3 ">
                  দয়া করে কাষ্টমার সার্ভিসে যোগাযোগ করুন।
                </p>
                <p
                  onClick={() => router.push("/Admins/CustomerService")}
                  className="text-base md:text-xl font-bold my-3 text-red-600 hover:underline cursor-pointer"
                >
                  কাষ্টমার সার্ভিস এর নাম্বার গুলো পেতে এই লিঙ্ক এ ক্লিক করুন
                </p>
              </div>
            </div>
          )}

          {searchedResult?.id && (
            <div className="w-[80%] mx-auto bg-white  p-5 my-10">
              {/* show search admin details start*/}
              <p className="text-center text-base lg:text-lg font-bold mb-3">
                উনি 1ten365 এর একজন অনলাইন {searchedResult?.profile?.type}{" "}
                নাম্বার {searchedResult?.input_id}
              </p>
              <div className=" w-full border border-black flex flex-col p-2">
                {/* 1st row start */}
                <div className="w-full flex border border-black py-3 bg-blue-300">
                  <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                    <p className="text-black">উনার এডমিন আইডিঃ </p>
                  </div>
                  <div className=" w-[50%] h-full flex justify-center items-center text-white">
                    <p className="text-black">{searchedResult?.input_id}</p>
                  </div>
                </div>
                {/* 1st row end */}

                {/* 2nd row start */}
                <div className=" w-full flex border border-black py-3 bg-blue-100">
                  <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                    <p className="text-black">উনার হোয়াটসঅ্যাপ নাম্বারঃ</p>
                  </div>
                  <div className=" w-[50%] h-full flex gap-3 justify-center items-center text-white">
                    <IoLogoWhatsapp
                      onClick={() => {
                        window.open(
                          `https://wa.me/${searchedResult?.profile?.wa_link},'_blank'`
                        );
                      }}
                      className="text-base md:text-2xl text-green-500 font-bold cursor-pointer"
                    />
                    <p className="text-black">
                      {searchedResult?.profile?.phone}
                    </p>
                  </div>
                </div>
                {/* 2nd row end */}
              </div>
              {/* show search admin details end*/}

              {/* show parent admin details start*/}

              {searchedResult?.super?.id && (
                <div>
                  <p className="text-center text-base lg:text-lg font-bold m-3">
                    এই 1ten365 এর অনলাইন সাব এডমিন এর আপলাইনের তথ্যঃ
                  </p>
                  <p className="text-center text-base lg:text-lg  mb-3">
                    উপরের সুপার এজেন্ট এর এর বিরুদ্ধে অভিযোগ করতে হলে নিচের যে
                    কোন নাম্বার এ হোয়াটসঅ্যাপ এ মেসেজ দিলেই হবে
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
                    <div className=" w-full flex border border-black py-3 bg-blue-100">
                      <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                        <p className="text-black">
                          উনার এডমিন এর হোয়াটসঅ্যাপ নাম্বারঃ
                        </p>
                      </div>
                      <div className=" w-[50%] h-full flex gap-3 justify-center items-center text-white">
                        <IoLogoWhatsapp
                          onClick={() => {
                            window.open(
                              `https://wa.me/${searchedResult?.profile?.wa_link},'_blank'`
                            );
                          }}
                          className="text-base md:text-2xl text-green-500 font-bold cursor-pointer"
                        />
                        <p className="text-black">+90912345</p>
                      </div>
                    </div>
                    {/* 2nd row end */}
                  </div>
                </div>
              )}
              {/* show parent admin details end*/}
            </div>
          )}
          {/* show search result end */}
    </div>
   </Layout>
  )
}

export default searchByNumber
