import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import "react-modern-drawer/dist/index.css";
import logo from "../../../public/images/1ten365logo.png";

// Import Drawer dynamically to disable SSR
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

const Menu = (props) => {
  const { children, items } = props;
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="border-b border-slate-800">
      <button
        className="w-full flex items-center justify-between text-white p-2 rounded-lg hover:bg-red-500 hover:text-white  duration-150"
        onClick={() => setIsOpened(!isOpened)}
      >
        <div className="flex items-center gap-x-2">{children}</div>
        <IoIosArrowDown
          className={`text-xl text-red-700 duration-150 ${
            isOpened ? "rotate-180 text-white" : ""
          }`}
        />
      </button>
      {isOpened ? (
        <ul className="mx-4 px-2 border-l text-sm font-medium">
          {items.map((item, idx) => (
            <li key={idx} className="border-b border-slate-800">
              <Link
                href={item?.href}
                className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-red-500 duration-150"
              >
                {item.icon ? (
                  <div className="text-gray-500">{item.icon}</div>
                ) : (
                  ""
                )}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigation = [
    {
      href: "/Admins/HomePage",
      name: "হোম পেইজ",
      icon: "",
    },
  ];

  const navsFooter = [
    {
      href: "javascript:void(0)",
      name: "1TEN",
      icon: "",
    },
    {
      href: "javascript:void(0)",
      name: "1TEN কমিউনিটি",
      icon: "",
    },
    {
      href: "javascript:void(0)",
      name: "1TEN ফোরাম",
      icon: "",
    },
  ];

  const generalQsns = [
    { name: "1Ten প্রক্সী লিঙ্ক", href: "/Faq/ProxyLink", icon: "" },
    { name: "1Ten তে একাউন্ট খুলবেন?", href: "/Faq/OpenAccount", icon: "" },
    { name: "এজেন্ট এর নতুন নাম্বার", href: "/Faq/OldNewNumber", icon: "" },
    { name: "ফোন নাম্বার সার্চ করুন", href: "/Faq/SearchByNumber", icon: "" },
  ];

  const agentListMenus = [
    { name: "এজেন্ট কে ভেরিফাই করুনট", href: "/Admins/VerifyAdmin" },
    { name: "এজেন্ট লিষ্ট", href: "/Admins/Agent" },
    { name: "সুপার এজেন্ট লিষ্ট", href: "/Admins/SuperAgent" },
    // { name: "সাব এজেন্ট লিষ্ট", href: "/Admins/" },
    { name: "সাব এডমিন লিষ্ট", href: "/Admins/SubAdmin" },
    { name: "এডমিন লিষ্ট", href: "/Admins/Admin" },
    { name: "সাইট এডমিন লিষ্ট", href: "/Admins/SiteAdmin" },
    { name: "কাস্টোমার সার্ভিস লিষ্ট", href: "/Admins/CustomerService" },
  ];

  return (
    <div className="">
      <div className="h-[50px] w-full flex items-center justify-between px-5 shadow-md">
        <div className="flex gap-x-2 ">
          <button
            onClick={toggleDrawer}
            className="text-2xl border-r pr-2 text-slate-600"
          >
            <GiHamburgerMenu />
          </button>
          <Image onClick={()=>router.push('/')} width={70} height={70} src={logo} alt="" />
        </div>

        <Link
          href="/Admins/CustomerService"
          className="text-xs font-semibold text-red-400  hover:text-700"
        >
          কাস্টোমার সার্ভিস
        </Link>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className=""
      >
        <nav className="fixed top-0 left-0 w-full h-full border-r bg-black space-y-8 sm:w-80">
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center text-white border-b border-slate-800">
              <p className="font-semibold text-lg">Sidebar</p>

              <button
                onClick={toggleDrawer}
                className="border-l text-lg font-bold p-2 border-slate-800 hover:text-red-700"
              >
                <IoClose />
              </button>
            </div>

            <div className="mt-5 overflow-auto">
              <ul className="text-sm font-medium flex-1">
                {navigation.map((item, idx) => (
                  <li key={idx} className="border-b border-slate-800">
                    <Link
                      href={item.href}
                      className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-red-500 hover:text-white duration-150"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Menu items={generalQsns}>সাধারণ প্রশ্ন উত্তর</Menu>
                </li>
                <li>
                  <Menu items={agentListMenus}>এজেন্ট লিস্ট</Menu>
                </li>
              </ul>

              <div>
                <ul className="text-sm font-medium">
                  {navsFooter.map((item, idx) => (
                    <li key={idx} className="border-b border-slate-800 ">
                      <Link
                        href={item.href}
                        className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-red-500 duration-150 cursor-not-allowed"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Drawer>
    </div>
  );
};

export default MobileNavbar;

