import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

function Layout (){
    return (
        <>
        <Header />
        <Outlet /> 
        <Footer />
        </>
    )
}

export default Layout
//Note : Outlet ko use karne se iske upper(Header) and Niche(Footer) same rahegi. but  iske ander chize change hoti rahegi