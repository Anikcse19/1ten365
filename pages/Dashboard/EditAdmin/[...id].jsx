import RequireAuth from "@/components/PrivateRoute/RequireAuth";
import base_url from "@/utils/Url";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DashboardLayout from "..";

const ls = typeof window != "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");

const EditAdmin = () => {

    
  const router = useRouter();
  const { id } = router.query;

  const { register, handleSubmit, reset } = useForm();
  const [admiDetails, setAdminDetails] = useState();
  const [types,setTypes]=useState([])
  const [selectedType, setSelectedType] = useState("");
  const [superVisor,setSuperVisor]=useState('')
  const [name,setName]=useState('')
  const [inputId,setInputId]=useState(null)
  const [wpLink,setWpLink]=useState(null)
  const [phone,setPhone]=useState(null)
  

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

  useEffect(() => {
    fetch(`https://test.aglist1ten365.com/api/admins/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdminDetails(data)
        setSelectedType(data?.admin?.profile?.type)
        setSuperVisor(data?.admin?.super?.name)
        setName(data?.admin?.name)
        setInputId(data?.admin?.input_id)
        setWpLink(data?.admin?.profile?.wa_link)
        setPhone(data?.admin?.profile?.phone)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const onSubmit = (data) => {

    const infos = {
      name:name,
      phone:phone,
      wa_link:wpLink,
      input_id:inputId,
      type: selectedType,
      admin_id:superVisor
    };

    if (infos.type == "সাইট এডমিন") {
      delete infos.admin_id;
    }

    fetch(`${base_url}/admins/update/${id}`, {
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
        if(data?.msg=='success'){
          toast.success('succesfully updated')
          router.push('/Dashboard/ViewAdmins')
        }
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
                  value={name}
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
                  defaultValue={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  placeholder="phone number"
                  className={inputFieldSTyle}
                />
              </div>

              {/* input id */}
              <div>
                <label className="text-gray-800 ">Input Id</label>
                <input
                  type="number"
                  defaultValue={inputId}
                  onChange={(e)=>setInputId(e.target.value)}
                  placeholder="input id"
                  className={inputFieldSTyle}
                />
              </div>

              {/* Whats App Link */}
              <div>
                <label className="text-gray-800 ">What's Link</label>
                <input
                  type="text"
                  placeholder="what's app link"
                  value={wpLink}
                  className={inputFieldSTyle}
                />
              </div>

              {/* Types */}
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
                  {types?.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Supervisor */}
              <div>
                <label className="text-gray-800 ">Supervisor</label>
                <input
                  type="text"
                  placeholder="supervisor"
                  value={superVisor}
                  onChange={(e)=>setSuperVisor(e.target.value)}
                  className={inputFieldSTyle}
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Update
              </button>
            </div>
          </form>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default RequireAuth(EditAdmin);
