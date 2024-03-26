import DashboardMobileNav from "@/components/dashboards-components/DashboarMobileNav";
import DashboardSidebar from "@/components/dashboards-components/DashboardSidebar";
import { useRouter } from "next/router";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  

  return (
    <div className="max-w-screen min-h-screen flex lg:flex-row flex-col">

      <div className="hidden lg:block lg:w-[21%] bg-green-100 h-full">
        <DashboardSidebar />
      </div>

      <div className="block lg:hidden">
        <DashboardMobileNav />
      </div>

      <div className="p-5 lg:w-[79%] h-full">
        {router.pathname === "/Dashboard/ViewAdmins" && (
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
