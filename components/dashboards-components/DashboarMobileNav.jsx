import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaNotesMedical, FaPlus } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import "react-modern-drawer/dist/index.css";
import logo from "../../public/images/1ten365/1ten365logo.png";

// Import Drawer dynamically to disable SSR
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

const DashboardMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const menus = [
    {
      url: "/Dashboard/AddAdmin",
      title: "Add Admins",
      icon: <FaPlus />,
    },
    {
      url: "/Dashboard/ViewAdmins",
      title: "View Admins",
      icon: <FaUsersViewfinder />,
    },
    {
      url: "/Dashboard/CustomService",
      title: "Create Custom Service",
      icon: <FaNotesMedical />,
    },
  ];

  return (
    <div className="">
      <div className="h-[50px] w-full flex items-center justify-between px-5 shadow-md">
        <div className="flex justify-center">
          <Image onClick={()=>router.push('/')} width={80} height={80} src={logo} alt="" />
        </div>

        <button onClick={toggleDrawer} className="text-2xl">
          <GiHamburgerMenu />
        </button>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className=""
      >
        <div className="px-4 py-2">
          <div className="flex flex-col gap-y-10">
            <div className="flex justify-center">
              <Image width={120} height={90} src={logo} alt="" />
            </div>

            <div>
              <ul className="flex flex-col gap-y-6">
                {menus.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item?.url}
                      className={`${
                        pathname === item?.url ? "bg-slate-100" : ""
                      } px-5 py-1 rounded-md hover:bg-slate-100`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DashboardMobileNav;
