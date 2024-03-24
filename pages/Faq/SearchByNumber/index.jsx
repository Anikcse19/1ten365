import Layout from "@/components/shared/Layout/Layout";
import { useState } from "react";

const searchByNumber = () => {
    const [number,setNumber]=useState()
    const [searchedResult,setSearchedResult]=useState({})

    const handleAdminSearch = () => {
        console.log(adminType, adminId);
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
            // value={adminId}
            //   onChange={(e) => setAdminId(e.target.value)}
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
    </div>
   </Layout>
  )
}

export default searchByNumber
