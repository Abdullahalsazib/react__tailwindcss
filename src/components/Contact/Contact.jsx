import React from "react";

export default function Contact() {
  return (
    <>
      <div className=" bg-gray-600 w-full ">
        <h1 className=" text-center text-4xl capitalize  p-5 text-white font-bold">
          contact us
        </h1>
        <div className=" xl:h-screen lg:px-32 xl:flex  items-center justify-between">
          <div className=" xl:w-[45%]   p-4">
            <iframe
              className=" rounded-lg w-full xl:h-[490px] h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29076.11290010593!2d88.6048295!3d24.3634126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1694724661516!5m2!1sen!2sbd"
            ></iframe>
          </div>
          <div className=" xl:w-[40%]  p-4">
            <form className=" space-y-5 text-[22px]">
              <input
                className=" bg-gray-200 h-10 outline-0 focus:ring-4 ring-sky-500 rounded-md py-1 px-3 w-full"
                type="text"
                placeholder="What is your name :"
              />
              <input
                className=" bg-gray-200  h-10 outline-0 focus:ring-4 ring-sky-500 rounded-md py-1 px-3 w-full"
                type="email"
                placeholder="Enter your email :"
              />
              <textarea
                className=" bg-gray-200  focus:ring-4 ring-sky-500 outline-none rounded-md py-1 px-3 w-full h-[240px]"
                placeholder="Your messages :"
              ></textarea>
              <button className="outline-0 text-[25px] focus:ring-4 ring-sky-500 rounded-md py-1 px-3 bg-sky-400 cursor-pointer font-bold text-white uppercase hover:bg-sky-600 hover:text-black duration-500">
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
