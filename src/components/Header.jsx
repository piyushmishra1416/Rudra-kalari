import React from "react";
import { Link } from  "react-router-dom"

export const Header = () => {
  return (
    <nav className=" w-full h-20 flex items-center justify-between px-6 relative">
      <img
        src="src/assets/kalaripayattu/kalari-symbol-250-black.png"
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
