import Link from "next/link";
import { useRouter } from "next/router";
import { FaQuestion } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";




const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const token = ls?.getItem("token");
  return (
    <div className="w-full">
      <div className="w-[95%] mx-auto bg-gray-200  py-1">
        <div className="flex justify-center gap-2 lg:gap-5 w-full">
          <Link
            className={`text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1 ${
              pathname == "/" && "bg-gray-900 text-white"
            }`}
            href="/"
          >
            <IoMdHome/>
            হোম
          </Link>
          <Link
            className={`text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1 ${
              pathname == "/Admins/CustomerService" && "bg-gray-900 text-white"
            }`}
            href="/Admins/CustomerService"
          >
            <FaQuestion/>
            কাস্টমার সার্ভিস
          </Link>
          {/* <Link
            className={`${
              pathname == "/Admins/SiteAdmin" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded`}
            href="/Admins/SiteAdmin"
          >
            সাইট এডমিন
          </Link> */}
          <Link
            className={`${
              pathname === "/Faq/OldNewNumber" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1`}
            href="/Faq/OldNewNumber"
          >
            <IoSettings/>
            ওল্ড/নিউ
          </Link>
          <Link
            className={`${
              pathname === "/Admins/Admin" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1`}
            href="/Admins/Admin"
          >
             <IoSettings/>
            এডমিন
          </Link>
          <Link
            className={`${
              pathname === "/Admins/SubAdmin" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1`}
            href="/Admins/SubAdmin"
          >
             <IoSettings/>
            সাব-এডমিন
          </Link>
          <Link
            className={`${
              pathname === "/Admins/SuperAgent" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1`}
            href="/Admins/SuperAgent"
          >
             <IoSettings/>
            সুপার-এজেন্ট
          </Link>
          <Link
            className={`${
              pathname === "/Admins/Agent" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded  flex items-center gap-1`}
            href="/Admins/Agent"
          >
             <IoSettings/>
            এজেন্ট
          </Link>

          {token && (
            <Link
              className="text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1"
              href="/Dashboard/ViewAdmins"
            >
              <MdDashboard/>
              ড্যাশবোর্ড
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
