import React, { useEffect, useState } from "react";
import DashboardLayout from "..";
import { useRouter } from "next/router";

const ls = typeof window != "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");

const CustomService = () => {
  const [adminId, setAdminId] = useState();
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerWp, setCustomerWP] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch(`https://test.aglist1ten365.com/api/admins?type=এজেন্ট`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
    const data = { id: Number(event.target.value) };

    fetch("https://test.aglist1ten365.com/api/update-quick-agent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  const handleCreateCustomerService = () => {
    console.log("clicked");

    // const formData=new FormData()
    // formData.append("name",customerName)
    // formData.append('phone',customerPhone)
    // formData.append('wa_link',customerWp)

    const data = {
      name: customerName,
      phone: customerPhone,
      wa_link: customerWp,
    };
    console.log(data, "data");

    axios
      .post(`${base_url}/types/create`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res?.data));
  };
  const inputFieldSTyle =
    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring";
  return (
    <DashboardLayout>
      <div>
        <div className="w-full">
          <p className="text-lg lg:text-2xl underline font-semibold">
            Custom Service
          </p>
        </div>

        {/* Select Quick Agent */}
        <div className="lg:w-[45%] mx-auto mt-10 bg-gray-200 p-5">
          <label className="text-slate-900 font-bold">Select Quick Agent</label>
          <select onChange={handleTypeChange} className={inputFieldSTyle}>
            {adminId?.map((item, i) => (
              <option key={i} value={item.id}>
                {item?.name}
              </option>
            ))}
          </select>
        </div>

        {/* Create Customer Service */}
        <div className="lg:w-[45%] mx-auto mt-10 bg-gray-200 p-5">
          <label className="text-slate-900 font-bold">
            Create Customer Service
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center mt-3">
            <div className="col-span-1 flex flex-col gap-1 text-slate-900">
              <label htmlFor="">Name</label>
              <input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className={inputFieldSTyle}
                type="text"
                placeholder="Type your name"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1 text-slate-900">
              <label htmlFor="">Phone</label>
              <input
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className={inputFieldSTyle}
                type="text"
                placeholder="Type your Phone No"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1 text-slate-900">
              <label htmlFor="">What's App Number</label>
              <input
                value={customerWp}
                onChange={(e) => setCustomerWP(e.target.value)}
                className={inputFieldSTyle}
                type="text"
                placeholder="Type your What's App No"
              />
            </div>
          </div>

          <div className="flex justify-end mt-3">
            <button
              onClick={handleCreateCustomerService}
              className="px-5 py-1 bg-slate-900 rounded-md hover:bg-slate-600 hover:text-black text-white font-bold"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomService;
