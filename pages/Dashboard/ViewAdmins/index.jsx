import Link from "next/link";
import { TiArrowBackOutline } from "react-icons/ti";

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

  return (
    <div className="p-10">
      <div className=" mx-auto px-4 p- bg-slate-800 p-5">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-100 text-xl font-bold sm:text-2xl">
              All Admins
            </h3>
          </div>
          <div className="mt-3 md:mt-0 flex items-center gap-x-5">
            <Link
              href="/Dashboard/AddAdmin"
              className=" px-2 lg:px-4 py-1 lg:py-2 text-white duration-150 lg:font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            >
              +Add Admins
            </Link>
            <Link
              href="/Dashboard"
              className="px-2 lg:px-4 py-1 lg:py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm flex items-center gap-x-1"
            >
              <TiArrowBackOutline /> Dashboard
            </Link>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Username</th>
                <th className="py-3 px-6">Number</th>
                <th className="py-3 px-6">Role</th>
                <th className="py-3 px-6">Rank</th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-100 divide-y">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <img src={item.avatar} className="w-10 h-10 rounded-full" />
                    <div>
                      <span className="block text-gray-100 text-sm font-medium">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.phone_nimber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <a
                      href="javascript:void()"
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Edit
                    </a>
                    <button
                      href="javascript:void()"
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
  );
}