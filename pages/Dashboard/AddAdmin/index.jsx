import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TiArrowBackOutline } from "react-icons/ti";


const ls = typeof window != "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");
const AddAdmin = () => {
  const { register, handleSubmit,reset } = useForm();
  const [types, setTypes] = useState();
  const [selectedType, setSelectedType] = useState("");
  

  const filteredAdmins = types?.filter((item) => item !== "সাইট এডমিন");


  useEffect(() => {
    fetch("https://test.aglist1ten365.com/api/admins/types", {
      headers: {
        "Accept":"application/json",
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTypes(data?.types))
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors
  }, []);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const [adminId, setAdminId] = useState();
  useEffect(() => {
    fetch(`https://test.aglist1ten365.com/api/admins?type=${selectedType === "সাব এডমিন" ? "এডমিন" : selectedType === "সুপার এজেন্ট" ? "সাব এডমিন" : selectedType === "এজেন্ট" ? "সুপার এজেন্ট" : "" }`, {
      headers: {
        "Accept":"application/json",
        "Content-Type": "application/json",
        Authorization:
        `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAdminId(data?.admins))
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors
  }, [selectedType]);

  const onSubmit = (data) => {
 

    const infos = {
      ...data,
      type: selectedType,
    };

    if(infos.type=='এডমিন'){
      delete infos.admin_id
    }

  

    fetch("https://test.aglist1ten365.com/api/admins/create", {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type": "application/json",
        Authorization:
        `Bearer ${token}`,
      },
      body: JSON.stringify(infos),
    })
      .then((res) => res.json())
      .then((data) => {
      
        reset()
        // Handle success response here
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        // Handle error here
      });
  };

  const inputFieldSTyle =
    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring";

  return (
    <div className=" p-10 bg-gray-700 min-h-screen">
      <div className="flex justify-end">
        <Link
          href="/Dashboard"
          className="px-4 py-2 bg-gray-800 duration-150 rounded-md text-white font-medium border border-slate-800 md:text-sm flex items-center gap-x-1 w-[150px]"
        >
          <TiArrowBackOutline /> Dashboard
        </Link>
      </div>

      <section className="w-[70%] mt-2 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add New Admin
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label className="text-gray-700 dark:text-gray-200"> Name </label>
              <input
                type="text"
                placeholder="name"
                {...register("name")}
                className={inputFieldSTyle}
              />
            </div>

            {/* phone number */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Phone Number
              </label>
              <input
                type="number"
                placeholder="phone number"
                {...register("phone")}
                className={inputFieldSTyle}
              />
            </div>

            {/* input id */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Input Id
              </label>
              <input
                type="number"
                placeholder="input id"
                {...register("input_id")}
                className={inputFieldSTyle}
              />
            </div>

            

            {/* Whats App Link */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                What's Link
              </label>
              <input
                type="text"
                placeholder="what's app link"
                {...register("wa_link")}
                className={inputFieldSTyle}
              />
            </div>

        

            {/* Types */}
            <div>
              <label className="text-gray-700 dark:text-gray-200">Types</label>
              <select
                className={inputFieldSTyle}
                value={selectedType}
                onChange={handleTypeChange}
              >
                <option value="" hidden>
                  Select Types
                </option>
                {filteredAdmins?.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Supervisor */}
            <div className={`${selectedType === "এডমিন" ? "hidden" : ""}`}>
              <label className="text-gray-700 dark:text-gray-200">
                Supervisor
              </label>
              <select {...register("admin_id")} className={inputFieldSTyle}>
                <option hidden>
                  Select-
                  {selectedType === "এডমিন"
                    ? "Admin"
                    : selectedType === "সাব এডমিন"
                    ? "Admin"
                    : selectedType === "সুপার এজেন্ট"
                    ? "Sub Admin"
                    : selectedType === "এজেন্ট"
                    ? "Super Agent"
                    : ""}
                </option>
                {adminId?.map((item, i) => (
                  <option key={i} value={item?.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddAdmin;
