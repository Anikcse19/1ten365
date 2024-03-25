import DashboardMobileNav from "@/components/dashboards-components/DashboarMobileNav";
import DashboardSidebar from "@/components/dashboards-components/DashboardSidebar";
import { useRouter } from "next/router";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className="flex lg:flex-row flex-col">

      <div className="hidden lg:block lg:w-[21%]">
        <DashboardSidebar />
      </div>

      <div className="block lg:hidden">
        <DashboardMobileNav />
      </div>

      <div className="p-5 lg:w-[79%] h-full">
        {router.pathname === "/Dashboard" && (
          <div className="w-full">
            <p className="text-lg lg:text-2xl underline font-semibold">Dashboard</p>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
