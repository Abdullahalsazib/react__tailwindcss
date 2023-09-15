import React from "react";
import AboutImg from "../../Images/aboutpic.webp";

export default function About() {
  return (
    <>
      <div className=" w-full h-full p-20 bg-gray-700">
        <div className=" lg:flex items-center justify-center">
          <div className=" flex  rounded-lg  items-center justify-center">
            <img
              className=" rounded-lg  shadow-lg shadow-slate-500   sm:w-[50%]"
              src={AboutImg}
              alt="404 img Err0r"
            />
          </div>
          <AboutText></AboutText>
        </div>
      </div>
    </>
  );
}

export function AboutText() {
  return (
    <>
      <div>
        <div className="sm:px-0 sm:my-10 2xl:space-y-4 space-y-2">
          <h1 className=" font-semibold 2xl:text-3xl text-2xl">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className=" font-sans text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            sunt laudantium rerum est officiis aliquid placeat expedita debitis
            ut velit architecto numquam beatae laborum ipsam autem impedit.
            Laboriosam provident itaque vel iure eum temporibus architecto
            quibusdam reiciendis? Ullam magni eum quo obcaecati consequuntur at
            illum. Possimus, et optio sequi accusantium alias quod soluta nobis
            ullam harum cupiditate, eaque error quia dolorem porro ad nisi
            magnam, ipsa aperiam nostrum fugiat nam. Iusto blanditiis est
            ratione id expedita iure consectetur ullam nisi, dolor dolorum
            mollitia culpa quae laborum vel eum iste neque at, illum corrupti
            similique soluta quibusdam praesentium. A, amet! Debitis!
          </p>
          <div className="2xl:inline-block 2xl:space-x-10 space-y-4 md:space-x-9">
            <button className="font-bold bg-purple-700 py-1 px-4 rounded-md text-xl">
              See More.
            </button>
            <button className="font-bold bg-purple-700 py-1 px-4 rounded-md text-xl">
              More More.
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
