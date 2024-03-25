import base_url from "@/utils/Url";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DashboardLayout from "..";

const ls = typeof window != "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");

export default function ViewAdmins() {
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Software engineer",
      salary: "10",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Product designer",
      salary: "90",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Front-end developer",
      salary: "80",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Laravel engineer",
      salary: "20",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Open source manager",
      salary: "75",
    },
  ];

  const [datas, setDatas] = useState([]);
  const fetchData = async() => {
    try {
      const response = await fetch(
        `${base_url}/admins`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setDatas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   fetchData();
  }, []);

  const handleDelete = (adminId) => {
    console.log(adminId);
  
      try {
        const formData=new FormData()
        formData.append('id',adminId)
        axios.post(`${base_url}/admins/destroy`,formData,{
         headers:{
          Accept:'application/json',
          'Content-type':'application/json',
          Authorization:`Bearer ${token}`
         }
        }).then(async res=>{
          if(res?.data?.msg=='success'){
            toast.success('User Deleted')
            await fetchData()
          }
        })
      } catch (error) {
        console.log(error);
      }
    
  };

  return (
    <DashboardLayout>
      <div className="">
        <div className=" mx-auto px-4   p-5">
          <div className="items-start justify-between md:flex">
            <div className="max-w-lg">
              <h3 className="text-slate-800 text-xl font-bold sm:text-2xl">
                All Admins
              </h3>
            </div>
            <div className="mt-3 md:mt-0 flex items-center gap-x-5">
              <Link
                href="/Dashboard/AddAdmin"
                className=" px-2 lg:px-4 py-1 lg:py-2 text-white duration-150 lg:font-medium bg-slate-900 rounded-lg hover:bg-slate-700 md:text-sm"
              >
                +Add Admins
              </Link>
            </div>
          </div>
          <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-300 text-slate-800 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Phone</th>
                  <th className="py-3 px-6">Type</th>
                  <th className="py-3 px-6">WhatsApp Link</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-slate-800 divide-y">
                {datas?.admins?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.input_id}
                    </td>

                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                      <div>
                        <span className="block text-slate-800 text-sm font-medium">
                          {item?.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.profile.phone}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.profile.type}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.profile?.wa_link}
                    </td>

                    <td className="text-right px-6 whitespace-nowrap">
                      <a
                        href="javascript:void()"
                        className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => handleDelete(item?.id)}
                        className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
