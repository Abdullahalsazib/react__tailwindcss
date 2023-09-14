import Home from "../Home/Home";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <div className="bg-gray-600">
        <Navbar />
        <Home/>
      </div>
    </>
  );
}

export default Header;
