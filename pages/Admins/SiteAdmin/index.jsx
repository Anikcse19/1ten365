import FooterSection from "@/components/home-two/CustomerServiceHome/FooterSection";
import Layout from "@/components/shared/Layout/Layout";
import base_url from "@/utils/Url";
import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";



const ls=typeof window != "undefined" ? window.localStorage : null
const token=ls?.getItem('token')
const SiteAdminPage = () => {
 const [siteAdmin,setSiteAdmin]=useState([])

  
  useEffect(()=>{
   fetch(`${base_url}/admins?type=সাইট এডমিন`,{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    }).then(res=>res.json()).then(data=>{

      setSiteAdmin(data.admins)
    })
  },[])

  
  return (
    <Layout>
      <div>
      {/*Site admin config  start*/}
      <div className="w-full  mt-12">
       

        {/* user alert start*/}
        <div className="w-[80%] mx-auto bg-white border-l-4 border-gray-500  p-5 my-10">
          <p className="text-base lg:text-xl font-bold">
            এজেন্ট দের সাথে লেনদেন এর আগে 1ten এর নিয়ম গুলো জেনে নিন!!
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
        
            <div className="w-[80%] mx-auto bg-white   p-5 my-10" >
              {/* <div className="text-center">
              <span className="text-center text-base md:text-xl">এডমিন <p className="text-lg md:text-2xl font-bold inline">{admin?.name}</p> এর অধীনে সর্বমোট সাব-এডমিন আছে {admin?.children?.length} জন</span>
              </div> */}
              <div className="w-full relative overflow-x-auto overflow-y-auto max-w-screen  max-h-screen mt-5 border-2 border-orange-700 ">
          <table className="w-full">
            <thead className="sticky top-0 text-sm lg:text-base bg-gray-400 w-full">
              <tr className="border-b border-orange-700 ">
                <th scope="col" className="px-5 lg:px-10 py-3">
                  ID NO
                </th>
                <th scope="col" className="px-5 lg:px-10 py-3">
                  NAME
                </th>
                <th scope="col" className="px-5 lg:px-10 py-3">
                  AGENT
                </th>
                <th scope="col" className="px-5 lg:px-10 py-3">
                  APP
                </th>
                <th scope="col" className="px-5 lg:px-10 py-3">
                  PHONE NUMBER
                </th>
                {/* <th scope="col" className="px-5 lg:px-10 py-3">
                  COMPALIN
                </th> */}
              </tr>
            </thead>
            <tbody>
             {
                siteAdmin?.map(admin=>{   
                                 
                  return (
                    (
                      <tr key={admin.id} className="border-b border-black text-[14px]">
                        <td className="px-3 py-3 text-center">{admin?.input_id}</td>
                        <td className="px-3 py-3 text-center">
                          {admin?.name}
                        </td>
                        <td className="px-3 py-3 text-center">
                          {admin?.profile?.type}
                        </td>
                        <td className="px-3 py-3 text-center flex justify-center items-center ">
                          {/* {adminC?.profile?.wa_link} */}
                          <IoLogoWhatsapp onClick={()=>{
                            window.open(`https://wa.me/${admin?.profile?.wa_link},'_blank`)
                          }} className="text-green-600 text-lg font-bold cursor-pointer"/>
                        </td>
                        <td className="px-3 py-3 text-center">
                         {admin?.profile?.phone}
                        </td>
                        {/* <td className="px-3 py-3 font-bold text-center cursor-pointer hover:underline hover:text-blue-800">
                        অভিযোগ
                        </td>                         */}
                      </tr>
                    )
                  )
                })
              }
            </tbody>
          </table>
        </div>
            </div>
        
        {/* admin table end */}
      </div>
    </div>
    <div className="w-[90%] mx-auto mb-2">
    <FooterSection/>
    </div>
    </Layout>
  );
};

export default SiteAdminPage;
