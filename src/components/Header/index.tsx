// Logo
import Logo from "../../../public/home/header-logo.png";
import CTA from "./CTA";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="lg:px-16 md:px-14 sm:px-10 px-6 lg:py-6 sm:py-4 py-2">
      <section className="flex items-center justify-between">
        <img src={Logo} alt="logo" />
        <Navbar />
        <CTA />
      </section>
    </header>
  );
};

export default Header;
