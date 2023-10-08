import React from "react";
import { Link } from  "react-router-dom"
import logo from '../assets/logo.png'

export const Header = () => {

  const navStyle = {
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    zIndex: 50,
  };
  return (
    
    <nav  className=" w-full h-20 flex items-center justify-between  px-6 top-0 bg-white sticky z-50"  >
      <img
        src={logo}
        alt="logo"
        className="h-16 flex "
      />
      <ul className="flex items-center justify-between px-20 space-x-4">
      <li className="font-mono font-bold text-gray-800 hover:text-gray-600">
          <Link to="/">Home</Link>
        </li>
        <li className="font-mono font-bold text-gray-800 hover:text-gray-600">
          <Link to="/about">About</Link>
        </li>
        <li className="font-mono font-bold text-gray-800 hover:text-gray-600">
          <Link to="/training">Training</Link>
        </li>
        <li className="font-mono font-bold text-gray-800 hover:text-gray-600">
          <Link to="/treatment">Treatment</Link>
        </li>
        <li className="font-mono font-bold text-gray-800 hover:text-gray-600">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

  );
};

export default Header;
