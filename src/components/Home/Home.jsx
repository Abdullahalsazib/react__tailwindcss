import React from "react";

function Home() {
  return (
    <div className="flex items-center justify-center h-screen p-10 lg:p-10">
      <div className=" bg-blue-500 rounded-md shadow-slate-500 shadow-lg text-center w-full lg:w-[70%] py-[80px]">
        <h1 className="text-[40px] lg:text-5xl font-semibold capitalize text-white">
          <span className=" text-purple-400">Hello</span> I'm Abdullah <br />
          <span className=" text-5xl"> Al Sazib</span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
