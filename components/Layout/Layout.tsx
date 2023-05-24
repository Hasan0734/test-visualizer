import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

type LayoutProps = { children?: ReactNode }
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    );
};

export default Layout;