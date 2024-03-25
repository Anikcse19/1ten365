import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TiArrowBackOutline } from "react-icons/ti";
import DashboardLayout from "..";

const ls = typeof window != "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");
const AddAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [types, setTypes] = useState();
  const [selectedType, setSelectedType] = useState("");

  const filteredAdmins = types?.filter((item) => item !== "সাইট এডমিন");

  useEffect(() => {
    fetch("https://test.aglist1ten365.com/api/admins/types", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
    fetch(
      `https://test.aglist1ten365.com/api/admins?type=${
        selectedType === "সাব এডমিন"
          ? "এডমিন"
          : selectedType === "সুপার এজেন্ট"
          ? "সাব এডমিন"
          : selectedType === "এজেন্ট"
          ? "সুপার এজেন্ট"
          : ""
      }`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setAdminId(data?.admins))
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors
  }, [selectedType]);

  const onSubmit = (data) => {
    const infos = {
      ...data,
      type: selectedType,
    };

    if (infos.type == "এডমিন") {
      delete infos.admin_id;
    }

    fetch("https://test.aglist1ten365.com/api/admins/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(infos),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        // Handle success response here
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        // Handle error here
      });
  };

  const inputFieldSTyle =
    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring";

  return (
    <DashboardLayout>
      <div className="">
      <div className="w-full">
            <p className=" text-lg lg:text-2xl underline font-semibold">Add Admins</p>
          </div>

        <section className="mt-8 w-[80%] p-6 mx-auto bg-gray-300 rounded-md shadow-md ">
                  <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label className="text-gray-800 ">Name</label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name")}
                  className={inputFieldSTyle}
                />
              </div>

              {/* phone number */}
              <div>
                <label className="text-gray-800 ">Phone Number</label>
                <input
                  type="number"
                  placeholder="phone number"
                  {...register("phone")}
                  className={inputFieldSTyle}
                />
              </div>

              {/* input id */}
              <div>
                <label className="text-gray-800 ">Input Id</label>
                <input
                  type="number"
                  placeholder="input id"
                  {...register("input_id")}
                  className={inputFieldSTyle}
                />
              </div>

              {/* Whats App Link */}
              <div>
                <label className="text-gray-800 ">What's Link</label>
                <input
                  type="text"
                  placeholder="what's app link"
                  {...register("wa_link")}
                  className={inputFieldSTyle}
                />
              </div>

              {/* Types */}
              <div>
                <label className="text-gray-800 ">Types</label>
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
                <label className="text-gray-800 ">Supervisor</label>
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
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default AddAdmin;
