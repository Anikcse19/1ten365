import { FaPlus } from "react-icons/fa6";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";
import Link from "next/link";
import logo from "../../public/images/1ten365/1ten365logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const DashboardSidebar = () => {
  const route = useRouter();

  const navigation = [
    {
      href: "/Dashboard/ViewAdmins",
      name: "View Admins",
      icon: <FaUsersViewfinder />,
    },
    {
      href: "/Dashboard/AddAdmin",
      name: "Add Admins",
      icon: <FaPlus />,
    },

    {
      href: "/Dashboard/CustomService",
      name: "Create Custom Service",
      icon: <FaNotesMedical />,
    },
  ];

  return (
    <>
      <nav className="top-0 left-0 w-full h-screen border-r bg-white">
        <div class="flex flex-col h-full">
          <div className="h-20 flex items-center px-8">
            <Link href="javascript:void(0)" className="flex-none">
              <Image src={logo} width={140} className="mx-auto" />
            </Link>
          </div>
          <div className="flex-1 flex flex-col h-full overflow-auto">
            <ul className="px-4 text-sm font-medium flex-1">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 
                    ${route.pathname === item.href ? "bg-gray-200" : ""}`}
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardSidebar;
