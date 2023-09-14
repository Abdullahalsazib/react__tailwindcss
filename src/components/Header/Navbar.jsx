import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <nav className=" py-3 bg-purple-700 w-full flex items-center justify-around">
        <h1 className=" font-semibold text-white text-3xl">Abdullah.</h1>
        <ul className=" hidden lg:flex items-center space-x-4 font-semibold text-white text-[25px]">
          <li>
            <a
              className="hover:text-yellow-200 px-4 rounded-md hover:bg-purple-800 py-1 hover:ring-2"
              href="@"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow-200 px-4 rounded-md hover:bg-purple-800 py-1 hover:ring-2"
              href="@"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow-200 px-4 rounded-md hover:bg-purple-800 py-1 hover:ring-2"
              href="@"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow-200 px-4 rounded-md hover:bg-purple-800 py-1 hover:ring-2"
              href="@"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow-200 px-4 rounded-md hover:bg-purple-800 py-1 hover:ring-2"
              href="@"
            >
              Others
            </a>
          </li>
        </ul>
        <AiOutlineMenu className="lg:hidden text-white font-semibold hover:ring-4  rounded-md text-3xl" />
      </nav>
    </div>
  );
}

export default Navbar;
