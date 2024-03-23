import Logo from "@/components/shared/Header/Logo/Logo";
import MobileNav from "@/components/shared/Header/Navbar/MobileNav";
import Navbar from "@/components/shared/Header/Navbar/Navbar";
import base_url from "@/utils/Url";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../../../public/images/1ten365logo.png";

const ls=typeof window != "undefined" ? window.localStorage : null
const token=ls?.getItem('token')
const CustomerServicePage = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        axios.get(`${base_url}/types`,{
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${token}`
            }
        }).then(res=>setServices(res?.data?.types))
    },[])
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

    
            <div className="w-[80%] mx-auto bg-white   p-5 my-10" >
              <div className="text-center">
               <p className="text-base md:text-2xl font-bold">1ten365 CUSTOMER SERVICE LIST</p>           
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
               
              </tr>
            </thead>
            <tbody>
             {
              
                services?.map(service=>{   
                //   console.log(admin,'admin')
                  return (
                    (
                      <tr key={service.id} className="border-b border-black text-[14px]">
                        <td className="px-3 py-3 text-center">{service?.id}</td>
                        <td className="px-3 py-3 text-center">
                          {service?.name}
                        </td>
                        <td className="px-3 py-3 text-center">
                          Customer Service
                        </td>
                        <td className="px-3 py-3 text-center flex justify-center items-center ">
                          
                          <IoLogoWhatsapp onClick={()=>{
                            window.open(`https://wa.me/${service?.wa_link},'_blank`)
                          }} className="text-green-600 text-lg font-bold cursor-pointer"/>
                        </td>
                        <td className="px-3 py-3 text-center">
                         {service?.phone}
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
         
    </div>
  )
}

export default CustomerServicePage
