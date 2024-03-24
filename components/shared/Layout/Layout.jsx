import LogoSection from "@/components/home-two/NavInfo/LogoSection";
import MobileNavbar from "@/components/home-two/NavInfo/MobileNavbar";
import NavInfo from "@/components/home-two/NavInfo/NavInfo";
import Navbar from "@/components/home-two/NavInfo/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="hidden lg:block">
        <NavInfo />
        <LogoSection />
        <Navbar />
      </div>

      <div className="block lg:hidden">
        <MobileNavbar />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
