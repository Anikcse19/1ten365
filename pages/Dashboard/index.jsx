import base_url from "@/utils/Url";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const ls = typeof window != "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");

const Dashboard = () => {
  const [adminId, setAdminId] = useState();
  const [customerName,setCustomerName]=useState('')
  const [customerPhone,setCustomerPhone]=useState('')
  const [customerWp,setCustomerWP]=useState('')
  const router=useRouter()
 

  useEffect(() => {
    fetch(`https://test.aglist1ten365.com/api/admins?type=এজেন্ট`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
         `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAdminId(data?.admins))
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors
  }, []);

  const onSubmit = (data) => {
  

    const infos = {
      ...data,
      type: selectedType,
    };

   

    // fetch("https://test.aglist1ten365.com/api/admins/create", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization:
    //       "Bearer 1|Ckh9lEP1wS7ycXQE5kheyIHXQ4X6uy4oZm3tANHw45479778",
    //   },
    //   body: JSON.stringify(infos),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("Data posted successfully:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error posting data:", error);
    //   });
  };

  const handleTypeChange = (event) => {
    const data = {id: Number(event.target.value)};

    fetch("https://test.aglist1ten365.com/api/update-quick-agent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization':
        `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
      
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  const handleCreateCustomerService=()=>{

    console.log('clicked');
    
    // const formData=new FormData()
    // formData.append("name",customerName)
    // formData.append('phone',customerPhone)
    // formData.append('wa_link',customerWp)

    const data={
      name:customerName,
      phone:customerPhone,
      wa_link:customerWp
    }
    console.log(data,'data');

   axios.post(`${base_url}/types/create`,data,{
    headers:{
      Accept:'application/json',
      "Content-Type":'application/json',
      Authorization:`Bearer ${token}`
    }
   }).then(res=>console.log(res?.data))
  }

  const inputFieldSTyle =
    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring";

  return (
    <div className="p-5 w-screen min-h-screen bg-gray-700 text-black">
      <h1 className="text-2xl uppercase underline text-semibold text-white">Dashboard</h1>

      <div className="flex gap-x-5 w-full justify-center mt-10">
        <Link href="/Dashboard/AddAdmin">
          <button className=" border border-slate-400 px-4 lg:px-10 py-1.5 text-white bg-slate-500 hover:bg-slate-600 rounded-md">
            Add Admin
          </button>
        </Link>
        <Link href="/Dashboard/ViewAdmins">
          <button className=" border border-slate-400 px-4 lg:px-10 py-1.5 text-white bg-slate-500 hover:bg-slate-600 rounded-md">
            View Admins
          </button>
        </Link>
      </div>

      <div className="lg:w-[350px] mx-auto mt-10">
        <label className="text-white font-bold">Select Quick Agent</label>
        <select onChange={handleTypeChange}  className={inputFieldSTyle}>
          {adminId?.map((item, i) => (
            <option key={i} value={item.id}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>

      <div className="lg:w-[550px] mx-auto mt-10">
      <label className="text-white text-base md:text-xl font-bold">Create Customer Service</label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center mt-3">
        <div className="col-span-1 flex flex-col gap-1 text-white">
            <label htmlFor="">Name</label>
            <input value={customerName} onChange={(e)=>setCustomerName(e.target.value)} className="px-3 py-1 outline-none rounded-sm text-black"  type="text" placeholder="Type your name" />
        </div>
        <div className="col-span-1 flex flex-col gap-1 text-white">
            <label htmlFor="">Phone</label>
            <input value={customerPhone} onChange={(e)=>setCustomerPhone(e.target.value)} className="px-3 py-1 outline-none rounded-sm text-black" type="text" placeholder="Type your Phone No" />
        </div>
        <div className="col-span-1 flex flex-col gap-1 text-white">
            <label htmlFor="">What's App Number</label>
            <input value={customerWp} onChange={(e)=>setCustomerWP(e.target.value)} className="px-3 py-1 outline-none rounded-sm text-black" type="text" placeholder="Type your What's App No" />
        </div>

      </div>
      <div className="mt-3">
        <button onClick={handleCreateCustomerService} className="px-5 py-1 bg-slate-500 rounded-md hover:bg-slate-400 hover:text-black text-white font-bold">Create</button>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
