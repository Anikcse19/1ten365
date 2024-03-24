import Link from "next/link";
import { useEffect, useState } from "react";


const ls = typeof window != "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");
const Dashboard = () => {
  const [adminId, setAdminId] = useState();
 

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
        Authorization:
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

  const inputFieldSTyle =
    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring";

  return (
    <div className="p-5 w-screen min-h-screen bg-stone-500 text-black">
      <h1 className="text-2xl uppercase underline text-semibold">Dashboard</h1>

      <div className="flex gap-x-5 w-full justify-center mt-10">
        <Link href="/Dashboard/AddAdmin">
          <button className=" border border-slate-400 px-4 lg:px-10 py-1.5 text-white bg-slate-900 rounded-md">
            Add Admin
          </button>
        </Link>
        <Link href="/Dashboard/ViewAdmins">
          <button className=" border border-slate-400 px-4 lg:px-10 py-1.5 text-white bg-slate-900 rounded-md">
            View Admins
          </button>
        </Link>
      </div>

      <div className="lg:w-[350px] mx-auto mt-10">
        <label className="text-gray-700 dark:text-gray-800">Select Quick Agent</label>
        <select onChange={handleTypeChange}  className={inputFieldSTyle}>
          {adminId?.map((item, i) => (
            <option key={i} value={item.id}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dashboard;
