import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Others from "./components/Others/Others";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/others" element={<Others/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
