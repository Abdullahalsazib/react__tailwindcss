import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav className=" py-3 bg-purple-700 w-full flex items-center justify-around">
        <h1 className=" font-semibold text-white text-3xl">Abdullah.</h1>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="md:hidden block text-white font-semibold hover:ring-4  rounded-md text-3xl"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="md:hidden block text-white font-semibold hover:ring-4  rounded-md text-3xl"
          />
        )}
        <ul className=" hidden md:flex items-center gap-2 font-semibold text-white text-[25px]">
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

        <ul
          className={` md:hidden  items-center  fixed bg-black top-[82px] w-full h-screen font-semibold text-white text-[28px]
        ${toggle ? "left-[0]" : "left-[-100%]"}
        `}
        >
          <li className=" flex items-center justify-center py-4">
            <a
              className="hover:text-yellow-200 px-4 rounded-md hover:bg-purple-800 py-1 hover:ring-2"
              href="@"
            >
              Home
            </a>
          </li>
          <li className=" flex items-center justify-center py-4">
            <a
              className="hover:text-yellow-200 px-4 rounded-md hover:bg-purple-800 py-1 hover:ring-2"
              href="@"
            >
              Blog
            </a>
          </li>
          <li className=" flex items-center justify-center py-4">
            <a
              className="hover:text-yellow-200 px-4 rounded-md hover:bg-purple-800 py-1 hover:ring-2"
              href="@"
            >
              About
            </a>
          </li>
          <li className=" flex items-center justify-center py-4">
            <a
              className="hover:text-yellow-200 px-4 rounded-md hover:bg-purple-800 py-1 hover:ring-2"
              href="@"
            >
              Contact
            </a>
          </li>
          <li className=" flex items-center justify-center py-4">
            <a
              className="hover:text-yellow-200 px-4 rounded-md hover:bg-purple-800 py-1 hover:ring-2"
              href="@"
            >
              Others
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
