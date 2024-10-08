// Logo
import { useState } from "react";
import Logo from "../../../public/home/header-logo.png";
import Hamburger from "../Icons/Hamburger";
import CTA from "./CTA";
import Navbar from "./Navbar";
import XMark from "../Icons/XMark";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  return (
    <header className="lg:px-16 md:px-14 sm:px-10 px-6 lg:py-6 sm:py-4 py-2">
      <section className="flex items-center justify-between">
        <img src={Logo} alt="logo" />
        <Navbar />
        <CTA />
        <button
          onClick={toggleMobileNav}
          className="sm:p-1.5 p-1 rounded-full border-2 border-black"
        >
          {isMobileNavOpen ? <XMark /> : <Hamburger />}
        </button>
      </section>
      {isMobileNavOpen && <MobileNavbar onClose={toggleMobileNav} />}
    </header>
  );
};

export default Header;
