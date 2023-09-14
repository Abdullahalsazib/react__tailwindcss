import React from "react";
import DevImg from "../../Images/deveimg.png";

function Home() {
  return (
    <>
      <div className=" h-screen  bg-red-500 flex items-center justify-center">
        <div className="lg:flex 2xl:px-[12rem] xl:px-[5rem] lg:px-[2rem] px-4 flex items-center justify-between">
          <div className=" md:text-[20px] bg-pink-600 2xl:space-y-18 xl:space-y-5 lg:space-y-8 xl:w-[50%] lg:w-[50%] p-4 lg:text-left sm:text-center  rounded-md">
            <div className=" lg:space-y-4">
              <h1 className=" text-white font-bold text-4xl lg:text-[50px] 2xl:text-[60px] xl:text-[40px] ">
                I'm a Full Stack
              </h1>
              <h1 className="text-white font-bold text-4xl lg:text-[40px] ">
                
                Web Developer
              </h1>
            </div>
            <p className=" font-sans text-gray-70 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur minus voluptate ab veniam ratione, maiores, ducimus
              aspernatur nostrum veritatis exercitationem, asperiores nihil
              commodi hic. Sequi aspernatur temporibus iste ipsum dolor?
            </p>
            <button>Join Us</button>
          </div>
          <div className=" lg:block hidden ">
            <img className=" lg:w-full" src={DevImg} alt="error" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
