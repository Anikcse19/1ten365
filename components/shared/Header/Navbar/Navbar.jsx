import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const token = ls?.getItem("token");
  return (
    <div className="w-full">
      <div className="w-[80%] bg-gray-300 mx-auto py-1">
        <div className="flex justify-center gap-5 w-full ">
          <Link
            className={`text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded ${
              pathname == "/" && "bg-gray-900 text-white"
            }`}
            href="/"
          >
            হোম
          </Link>
          <Link
            className={`text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded ${
              pathname == "/Admins/CustomerService" && "bg-gray-900 text-white"
            }`}
            href="/Admins/CustomerService"
          >
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
              pathname === "/Admins/Admin" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded`}
            href="/Admins/Admin"
          >
            এডমিন
          </Link>
          <Link
            className={`${
              pathname === "/Admins/SubAdmin" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded`}
            href="/Admins/SubAdmin"
          >
            সাব-এডমিন
          </Link>
          <Link
            className={`${
              pathname === "/Admins/SuperAgent" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded`}
            href="/Admins/SuperAgent"
          >
            সুপার-এজেন্ট
          </Link>
          <Link
            className={`${
              pathname === "/Admins/Agent" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded`}
            href="/Admins/Agent"
          >
            এজেন্ট
          </Link>

          {token && (
            <Link
              className="text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded"
              href="/Dashboard/ViewAdmins"
            >
              ড্যাশবোর্ড
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
