import Navbar from "@/components/Navbar";
import React from "react";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
    return (
      <div >
        <ToastContainer />
        <Navbar />
        <main>{children}</main>
        <footer className="text-white flex justify-center bg-black p-1 rounded-full mt-10">
            <p className="text-xl">&copy; {new Date().getFullYear()} Blogifier. All rights reserved.</p>
        </footer>
      </div>
    );
};

export default Layout;
