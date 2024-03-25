import FooterSection from "@/components/home-two/CustomerServiceHome/FooterSection";
import Complain from "@/components/shared/Complain/Complain";
import Layout from "@/components/shared/Layout/Layout";
import base_url from "@/utils/Url";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import subAdminPoster from "../../../public/images/1ten365/sub admin list.png";

const ls = typeof window != "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");
const SubAdminPage = () => {
  const [adminType, setAdminType] = useState("");
  const [adminId, setAdminId] = useState("");
  const [searchedResult, setSearchedResult] = useState({});
  const [types, setTypes] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [userNotFound, setUserNotFound] = useState(false);
  const [currentSelected,setCurrentSelected]=useState({
    obj:{},status:false
  })
  const router = useRouter();

  useEffect(() => {
    fetch(`${base_url}/admins/types`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        // 'Content-type':'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTypes(data.types);
        setAdminType(types[2]);
      });

    fetch(`${base_url}/admins?type=এডমিন`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmins(data.admins);
      });
  }, []);

  const handleAdminSearch = () => {
    setUserNotFound(false);
    setSearchedResult({});
    setCurrentSelected({
      obj:{},status:false
    })
    axios
      .get(`${base_url}/admins/${adminId}?type=${adminType}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res?.data?.msg == "success") {
          setSearchedResult(res?.data?.admin);
        } else {
          setUserNotFound(true);
        }
      });
  };
  return (
    <Layout>
      <div>
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
                name=""
                id=""
                className="outline-none border-2 border-black px-2 py-1 w-[220px]"
              >
                {types?.slice(1, 5)?.map((type,i) => (
                  <option key={i} value={type}>{type}</option>
                ))}
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

           {/* show Complain box start */}
           {currentSelected.status && (
            <div id="complain">
              <Complain
                from="subAdmin"
                currentSelected={currentSelected}
                setCurrentSelected={setCurrentSelected}
              />
            </div>
          )}
          {/* show Complain box end */}

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
                    উপরের সাব এডমিন এর বিরুদ্ধে অভিযোগ করতে হলে নিচের যে কোন
                    নাম্বার এ হোয়াটসঅ্যাপ এ মেসেজ দিলেই হবে
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

          {/* poster start */}
          <div className="w-[80%] mx-auto p-5 my-10">
            <Image
              width={400}
              height={200}
              className="w-[100%]"
              src={subAdminPoster}
              alt="poster"
            />
          </div>
          {/* poster end */}

          {/* user alert start*/}
          <div className="w-[80%] mx-auto bg-white border-l-4 border-gray-500  p-5 my-10">
            <p className="text-base lg:text-xl font-bold">
              এজেন্ট দের সাথে লেনদেন এর আগে 1ten এর নিয়ম গুলো জেনে নিন!!
            </p>
            <p>
              **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন 1ten365.com
              **হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন
              করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না।
            </p>
            <p className="text-center mt-5 text-lg lg:text-2xl font-bold">
              1ten365 Sub Admin List
            </p>
          </div>
          {/* user alert end*/}

          {/* admin table start */}
          {admins?.map((admin) => (
            <div
              className="w-[80%] mx-auto bg-white   p-5 my-10"
              key={admin?.input_id}
            >
              <div className="text-center">
                <span className="text-center text-base md:text-xl">
                  এডমিন{" "}
                  <p className="text-lg md:text-2xl font-bold inline">
                    {admin?.name}
                  </p>{" "}
                  এর অধীনে সর্বমোট সাব-এডমিন আছে {admin?.children?.length} জন
                </span>
              </div>
              <div className="w-full relative overflow-x-auto overflow-y-auto max-w-screen  max-h-screen mt-5 border-2 border-orange-700 ">
                <table className="w-full">
                  <thead className="sticky top-0 text-base bg-gray-400 w-full">
                    <tr className="border-b border-orange-700 ">
                      <th scope="col" className="px-10 py-3">
                        ID NO
                      </th>
                      <th scope="col" className="px-10 py-3">
                        NAME
                      </th>
                      <th scope="col" className="px-10 py-3">
                        AGENT
                      </th>
                      <th scope="col" className="px-10 py-3">
                        APP
                      </th>
                      <th scope="col" className="px-10 py-3">
                        PHONE NUMBER
                      </th>
                      <th scope="col" className="px-10 py-3">
                        COMPALIN
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {admin?.children?.map((adminC) => {
                      return (
                        <tr
                          key={adminC.id}
                          className="border-b border-black text-[14px]"
                        >
                          <td className="px-3 py-3 text-center">
                            {adminC?.input_id}
                          </td>
                          <td className="px-3 py-3 text-center">
                            {adminC?.name}
                          </td>
                          <td className="px-3 py-3 text-center">
                            {adminC?.profile?.type}
                          </td>
                          <td className="px-3 py-3 text-center flex justify-center items-center ">
                            {/* {adminC?.profile?.wa_link} */}
                            <IoLogoWhatsapp
                              onClick={() => {
                                window.open(
                                  `https://wa.me/${adminC?.profile?.wa_link},'_blank`
                                );
                              }}
                              className="text-green-600 text-lg font-bold cursor-pointer"
                            />
                          </td>
                          <td className="px-3 py-3 text-center">
                            {adminC?.profile?.phone}
                          </td>
                          <td
                           onClick={() => {
                            setCurrentSelected({
                              obj: {},
                              status: false,
                            });

                            window.scrollTo({
                              top: 500,
                              behavior: "smooth", // This smooth scrolls the page to the top
                            });

                            setCurrentSelected({
                              obj: adminC,
                              status: true,
                            });
                          }}
                          className="px-3 py-3 font-bold text-center cursor-pointer hover:underline hover:text-blue-800">
                            অভিযোগ
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          {/* admin table end */}
        </div>
      </div>
      <div className="w-[90%] mx-auto mb-2">
    <FooterSection/>
    </div>
    </Layout>
  );
};

export default SubAdminPage;
