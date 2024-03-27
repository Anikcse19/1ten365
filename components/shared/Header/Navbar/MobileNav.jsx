import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "react-modern-drawer/dist/index.css";
import logo from "../../../../public/images/1ten365logo.png";

// Import Drawer dynamically to disable SSR
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const token = ls?.getItem("token");

  const menus = [
    { title: "হোম", url: "" },
    { title: "কাস্টমার সার্ভিস", url: "/Admins/CustomerService" },
    { title: "ওল্ড/নিউ", url: "/Faq/OldNewnumber" },
    { title: "এডমিন", url: "/Admins/Admin" },
    { title: "সাব-এডমিন", url: "/Admins/SubAdmin" },
    { title: "সুপার-এজেন্ট", url: "/Admins/SuperAgent" },
    { title: "এজেন্ট", url: "/Admins/Agent" },
    { title: "ড্যাশবোর্ড", url: "/Dashboard/ViewAdmins" },
  ];

  return (
    <div className="">
      <button onClick={toggleDrawer} className="text-2xl">
        <GiHamburgerMenu />
      </button>

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
                      {item?.title}
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

export default MobileNav;
