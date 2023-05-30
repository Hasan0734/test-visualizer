import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Header from '../Header';
import { menuItems } from '@/constants/header';

type LayoutProps = { children?: ReactNode }
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header menuItems={menuItems} />
            {children}
            <Footer/>
        </>
    );
};

export default Layout;