import FooterLogo from "../../../public/home/footer-logo.png";
import MiddleSection from "./MiddleSection";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white pb-28 pt-20 lg:px-16 md:px-14 sm:px-10 px-6 ">
      <img src={FooterLogo} alt="logo" />
      <MiddleSection />
    </footer>
  );
};

export default Footer;
