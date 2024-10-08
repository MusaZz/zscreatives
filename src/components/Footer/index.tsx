import FooterLogo from "../../../public/home/footer-logo.png";
import MiddleSection from "./MiddleSection";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white lg:pb-28 md:pb-24 sm:pb-20 pb-16 lg:pt-20 md:pt-16 sm:pt-12 pt-8 lg:px-16 md:px-14 sm:px-10 px-6 ">
      <img src={FooterLogo} alt="logo" />
      <MiddleSection />
    </footer>
  );
};

export default Footer;
