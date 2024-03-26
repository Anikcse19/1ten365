import Link from "next/link";
import { useRouter } from "next/router";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
  const route = useRouter();

  const generalQsns = [
    { title: "1Ten প্রক্সী লিঙ্ক", url: "/Faq/ProxyLink" },
    { title: "1Ten তে একাউন্ট খুলবেন?", url: "/Faq/OpenAccount" },
    { title: "এজেন্ট এর নতুন নাম্বার", url: "/Faq/OldNewNumber" },
    { title: "ফোন নাম্বার সার্চ করুন", url: "/Faq/SearchByNumber" },
  ];

  const agentListMenus = [
    { title: "এজেন্ট কে ভেরিফাই করুনট", url: "/Admins/VerifyAdmin" },
    { title: "এজেন্ট লিষ্ট", url: "/Admins/Agent" },
    { title: "সুপার এজেন্ট লিষ্ট", url: "/Admins/SuperAgent" },
    // { title: "সাব এজেন্ট লিষ্ট", url: "/Admins/" },
    { title: "সাব এডমিন লিষ্ট", url: "/Admins/SubAdmin" },
    { title: "এডমিন লিষ্ট", url: "/Admins/Admin" },
    { title: "সাইট এডমিন লিষ্ট", url: "/Admins/SiteAdmin" },
    { title: "কাস্টোমার সার্ভিস লিষ্ট", url: "/Admins/CustomerService" },
  ];

  return (
    <div className="border-b-2 bg-white border-slate-200">
      <div className="w-[76%] mx-auto">
        <div className="flex items-center gap-x- w-full h-[50px]">
          <ul className="h-[50px] flex items-center">
            <li
              className={`w-[150px] h-full font-semibold flex justify-center items-center hover:bg-slate-900 hover:text-white border-r ${
                route.pathname === "/Admins/HomePage"
                  ? "bg-slate-900 text-white"
                  : ""
              }`}
            >
              <Link href="/Admins/HomePage">হোম পেইজ</Link>
            </li>

            <div className="dropdown h-full inline-block relative w-[200px] border-r">
              <button className="w-full border-r text-gray-700 font-semibold py-2 px-4 flex justify-center items-end">
                <span className="mr-1">সাধারণ প্রশ্ন উত্তর</span>
                <TiArrowSortedDown className="rotate-[-45deg] text-xl -mb-1" />
              </button>
              <ul className="dropdown-menu w-[200px] absolute hidden text-gray-700 pt-1 p-2 shadow-lg text-sm bg-gray-200 z-[1000]">
                {generalQsns.map((item, i) => (
                  <li
                    key={i}
                    className=" text-slate-900  p-1 hover:bg-black hover:text-white cursor-pointer rounded mt-2"
                  >
                    <Link href={item?.url}>{item?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dropdown h-full inline-block relative w-[200px] border-r">
              <button className="w-full border-r text-gray-700 font-semibold py-2 px-4 flex justify-center items-end">
                <span className="mr-1">এজেন্ট লিস্ট</span>
                <TiArrowSortedDown className="rotate-[-45deg] text-xl -mb-1" />
              </button>
              <ul className="dropdown-menu w-[200px] absolute hidden text-gray-700 pt-1 p-2 shadow-lg text-sm bg-gray-200 z-[1000]">
                {agentListMenus.map((item, i) => (
                  <li
                    key={i}
                    className=" text-slate-900 hover:text-white rounded p-1 hover:bg-black cursor-pointer mt-2"
                  >
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
