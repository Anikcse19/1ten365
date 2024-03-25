import FooterSection from "@/components/home-two/CustomerServiceHome/FooterSection";
import Layout from "@/components/shared/Layout/Layout";
import base_url from "@/utils/Url";
import Image from "next/image";
import { useEffect, useState } from "react";
import superAgentPoster from '../../../public/images/1ten365/super agent list.png';

const ls=typeof window != "undefined" ? window.localStorage : null
const token=ls?.getItem('token')

const OldNewNumber = () => {
    const [agents,setAgents]=useState([])


    useEffect(()=>{
  
      fetch(`${base_url}/admins?type=এজেন্ট`,{
        method:'GET',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json',
        //   'Authorization':`Bearer ${token}`
        }
      }).then(res=>res.json()).then(data=>setAgents(data.admins))
    },[])

    
  return (
    <Layout>
      <div>
      {/*Site admin config  start*/}
      <div className="w-full  mt-12">

          {/* poster start */}

          <div className="w-[80%] mx-auto p-5 my-10">
          <Image width={400} height={200} className="w-[100%]" src={superAgentPoster} alt="poster"/>
          </div>
          {/* poster end */}

        {/* user alert start*/}
        <div className="w-[80%] mx-auto bg-white border-l-4 border-gray-500  p-5 my-10">
          <p className="text-base lg:text-xl font-bold">
          দয়া করে একটু নির্দেশনা গুলো পড়ে নিনঃ
          </p>
          <p>
          **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন 1Ten সাইটঃ 1ten365.COM <br />
**হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না। <br />
**এজেন্ট পাসোয়ার্ড পরিবর্তন করে দিলে - আপনি একাউন্টে ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট যাতে কোন ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি কাউকেই দিবেন না - সে যেই হউক না কেন। <br />
**সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার 1Ten নিবে না। <br />
**প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী। <br />
**এজেন্ট এর বিরুদ্ধে কোন অভিযোগ থাকলে এজেন্ট এর নামের শেষে অভিযোগ বাটন এ ক্লিক করলে যে হোয়াটসাপ নাম্বার আসবে - তাকে অভিযোগ করতে হবে।
          </p>
          <p className="text-center mt-5 text-lg lg:text-2xl font-bold">
            1Ten Agent List
          </p>
        </div>
        {/* user alert end*/}

        {/* admin table start */}
        
          
            <div className="w-[80%] mx-auto bg-white   p-5 my-10" >
              <div className="w-full relative overflow-x-auto overflow-y-auto max-w-screen  max-h-screen mt-5 border-2 border-orange-700 ">
          <table className="w-full">
            <thead className="sticky top-0 text-base bg-gray-400 w-full">
              <tr className="border-b border-orange-700 ">
                <th scope="col" className="px-10 py-3">
                  NEW ID
                </th>
                <th scope="col" className="px-10 py-3">
                  OLD NUMBER
                </th>
                <th scope="col" className="px-10 py-3">
                  NEW NUMBER
                </th>
              </tr>
            </thead>
            <tbody>
             {           
                agents?.map(agent=>{   
                 
                  return (
                    (
                      <tr key={agent.id} className="border-b border-black text-[14px]">
                        <td className="px-3 py-3 text-center">
                          {agent?.input_id}
                        </td>                     
                        <td className="px-3 py-3 text-center">
                         {agent?.profile?.old_phone ? agent?.profile?.old_phone : "- - -"}
                        </td>
                        <td className="px-3 py-3 text-center">
                         {agent?.profile?.phone}
                        </td>                                                
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
  )
}

export default OldNewNumber
