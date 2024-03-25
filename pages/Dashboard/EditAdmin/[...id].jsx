import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TiArrowBackOutline } from "react-icons/ti";
import DashboardLayout from "..";
import { useRouter } from "next/router";

const ls = typeof window != "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");

const EditAdmin = () => {

    
  const router = useRouter();
  const { id } = router.query;

  const { register, handleSubmit, reset } = useForm();
  const [admiDetails, setAdminDetails] = useState();
  console.log(admiDetails?.admin)

  useEffect(() => {
    fetch(`https://test.aglist1ten365.com/api/admins/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAdminDetails(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);



  const onSubmit = (data) => {

    fetch("update route", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
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

  console.log(admiDetails?.admin?.profile?.type)
  const inputFieldSTyle =
    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring";

  return (
    <DashboardLayout>
      <div className="">
        <div className="w-full">
          <p className=" text-lg lg:text-2xl underline font-semibold">
            Edit Admins
          </p>
        </div>

        <section className="mt-8 w-[80%] p-6 mx-auto bg-gray-300 rounded-md shadow-md ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/* Name */}
              <div className="text-text-gray-800 ">
                <label className="text-gray-800 ">
                  Name {admiDetails?.admin?.name}
                </label>
                <input
                  type="text"
                  value={admiDetails?.admin?.name}
                  //   placeholder="name"
                  {...register("name")}
                  className={inputFieldSTyle}
                />
              </div>

              {/* phone number */}
              <div>
                <label className="text-gray-800 ">Phone Number</label>
                <input
                  type="number"
                  value={admiDetails?.admin?.profile?.phone}
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
                  value={admiDetails?.admin?.input_id}
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
                  value={admiDetails?.admin?.profile?.wa_link}
                  {...register("wa_link")}
                  className={inputFieldSTyle}
                />
              </div>

              {/* Types */}
              <div>
                <label className="text-gray-800 ">Types</label>
                <input
                  type="text"
                  defaultValue={admiDetails?.admin?.profile?.type}
                  {...register("type")}
                  className={inputFieldSTyle}
                />
              </div>

              {/* Supervisor */}
              <div>
                <label className="text-gray-800 ">Supervisor</label>
                <input
                  type="text"
                  placeholder="supervisor"
                //   value={admiDetails?.admin?.profile?.type}
                  {...register("type")}
                  className={inputFieldSTyle}
                />
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

export default EditAdmin;
