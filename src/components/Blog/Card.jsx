export default function Card() {
    return (
      <div className=" bg-blue-400  shadow-lg shadow-slate-500  ">
        <div className=" bg-fuchsia-600 h-[240px] w-full"></div>
        <div className=" capitalize space-y-1 p-4">
          <h1 className=" font-bold">Lorem ipsum</h1>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p className=" text-[19px] text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum pariatur
            quisquam cupiditate at eius id perspiciatis rerum, illo harum numquam!
          </p>
          <button className=" rounded-md hover:ring-4 ring-pink-500 capitalize bg-purple-500 font-semibold  py-1 px-4">
            <a href="@">click me</a>
          </button>
        </div>
      </div>
    );
  }
  