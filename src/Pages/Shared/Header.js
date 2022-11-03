import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
const Header = () => {
    const menuItems = (
      <>
        <li>
          <Link>home</Link>
        </li>
        <li>
          <Link>about</Link>
        </li>
        <li>
          <Link>login</Link>
        </li>
      </>
    );
  return (
    <nav className="navbar bg-base-100 h-24 w-[1140px] mx-auto my-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-[18px] text-[#444444]"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="normal-case text-xl w-28">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold text-[18px] text-[#444444]">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-error">appointment</button>
      </div>
    </nav>
  );
};

export default Header;
