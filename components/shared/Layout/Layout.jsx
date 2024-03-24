import LogoSection from "@/components/home-two/NavInfo/LogoSection"
import NavInfo from "@/components/home-two/NavInfo/NavInfo"
import Navbar from "@/components/home-two/NavInfo/Navbar"


const Layout = ({children}) => {
  return (
    <div className="flex flex-col">
        {/* nav */}
        <div>
        <NavInfo/>
            <LogoSection/>
            <Navbar/>
        </div>
        <div>
            {children}
        </div>

      
    </div>
  )
}

export default Layout
