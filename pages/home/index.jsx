import LogoSection from '@/components/home-two/NavInfo/LogoSection';
import NavInfo from '@/components/home-two/NavInfo/NavInfo';
import Navbar from '@/components/home-two/NavInfo/Navbar';
import React from 'react';

const Layout = () => {
    return (
        <div className='bg-white min-w-screen min-h-screen'>
            <NavInfo/>
            <LogoSection/>
            <Navbar/>
        </div>
    );
};

export default Layout;