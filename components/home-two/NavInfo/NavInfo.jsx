import Link from "next/link";

const NavInfo = () => {
  const menus = [
    {
      title: "1Ten",
      url: "",
      status: true,
    },
    {
      title: "1Ten কমিউনিটি",
      url: "",
      status: false,
    },
    {
      title: "1Ten ফোরাম",
      url: "",
      status: false,
    },
  ];

  return (
    <div className="bg-gray-100 h-[45px] flex items-center">
      <ul className="flex items-center gap-x- w-full h-full">
        {menus.map((item, i) => (
          <li
            key={i}
            className={`w-[150px] h-full text-slate-900 font-semibold text-sm hover:text-white hover:bg-slate-900 flex justify-center items-center border-r border-slate-300 ${item.status ? "" : "cursor-not-allowed"}`}
          >
            <Link href="" className={`${item.status ? "" : "cursor-not-allowed"}`}>{item?.title}</Link>
          </li>
        ))}
      </ul>

      <Link href="/Admins/CustomerService" className="border w-[160px] text-sm font-semibold h-full flex justify-center items-center text-red-400 bg-gray-200 hover:bg-slate-300">কাস্টোমার সার্ভিস</Link>
    </div>
  );
};

export default NavInfo;
