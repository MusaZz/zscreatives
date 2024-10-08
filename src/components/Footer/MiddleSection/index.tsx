import FooterNavbar from "../FooterNavbar";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const MiddleSection = () => {
  return (
    <section className="flex lg:flex-row flex-col items-start justify-between md:mt-6 sm:mt-8 mt-9 gap-10">
      <div className="w-fit flex flex-col gap-12">
        <form
          action="#"
          className="flex sm:flex-row flex-col items-center gap-3 lg:py-5"
        >
          <input
            type="text"
            className=" w-full focus:outline-none px-5 py-[14px] bg-transparent border border-white focus:border-black"
            placeholder="Your email adress"
          />
          <button className="bg-white w-full sm:w-[174px] text-[#1E1E1E] hover:text-white hover:bg-[#1E1E1E] duration-300  py-[14px] grid place-items-center border border-white uppercase font-bold text-base">
            let's talk
          </button>
        </form>
        <p className="lg:w-[504px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dt nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
        </p>
        <div className="lg:flex hidden itemx-center gap-5">
          <div className="bg-white hover:scale-125 cursor-pointer duration-300 rounded-full w-10 h-10 grid place-items-center">
            <FaFacebookF fill="black" className="text-xl" />
          </div>
          <div className="bg-white hover:scale-125 cursor-pointer duration-300 rounded-full w-10 h-10 grid place-items-center">
            <FaInstagram fill="black" className="text-xl" />
          </div>
          <div className="bg-white hover:scale-125 cursor-pointer duration-300 rounded-full w-10 h-10 grid place-items-center">
            <FaLinkedinIn fill="black" className="text-xl" />
          </div>
          <div className="bg-white hover:scale-125 cursor-pointer duration-300 rounded-full w-10 h-10 grid place-items-center">
            <FaYoutube fill="black" className="text-xl" />
          </div>
        </div>
      </div>
      <div className=" lg:w-fit w-full flex flex-col lg:gap-14 md:gap-11 sm:gap-8 gap-6">
        <div className="flex items-start w-full lg:justify-start sm:justify-between justify-center lg:gap-36 md:gap-32 sm:gap-16 gap-10 sm:flex-row flex-col ">
          <FooterNavbar title={`services`} />
          <FooterNavbar title={`general`} />
        </div>
        <div className="lg:hidden flex justify-center itemx-center gap-5 flex-wrap">
          <div className="bg-white cursor-pointer rounded-full w-10 h-10 grid place-items-center">
            <FaFacebookF fill="black" className="text-xl" />
          </div>
          <div className="bg-white rounded-full w-10 h-10 grid place-items-center">
            <FaInstagram fill="black" className="text-xl" />
          </div>
          <div className="bg-white rounded-full w-10 h-10 grid place-items-center">
            <FaLinkedinIn fill="black" className="text-xl" />
          </div>
          <div className="bg-white rounded-full w-10 h-10 grid place-items-center">
            <FaYoutube fill="black" className="text-xl" />
          </div>
        </div>
        <p className="text-base font-normal lg:text-left text-center">
          © Copyright 2024 ZS Creative. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default MiddleSection;
