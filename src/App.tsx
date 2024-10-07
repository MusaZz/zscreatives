import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Header from "./components/Header";
import Service from "./pages/Service";

const App = () => {
  return (
    <section className="text-[#363636]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<Service />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </section>
  );
};

export default App;
