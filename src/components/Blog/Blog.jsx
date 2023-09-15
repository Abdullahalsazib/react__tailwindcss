import React from "react";
import Card from "./Card";

export default function Blog() {
  return (
    <>
      <div className=" bg-gray-800">
        <div className="w-full h-scree">
          <div className=" 2xl:p-2 2xl:bg-yellow-400 2xl:flex items-center justify-cente">
            <div className=" 2xl:w-[70%] ">
              <XCard />
            </div>
            <div className=" font-bold text-2xl text-black hidden 2xl:block 2xl:w-[50%] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus quo vel facere, quos nulla inventore at similique
              suscipit obcaecati! Sapiente, quaerat! Aperiam necessitatibus
              maiores fuga illo ratione, labore ducimus corrupti?
            </div>
          </div>

          <XCard />
          <XCard />
          <XCard />
        </div>
      </div>
    </>
  );
}

export function XCard() {
  return (
    <>
      <div className=" xl:flex xl:space-x-16 lg:p-40 md:p-24 p-14 lg:space-y-20 space-y-10 w-full h-50">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
