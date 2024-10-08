import FooterNavbar from "../FooterNavbar";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const MiddleSection = () => {
  return (
    <section className="flex items-end justify-between mt-6">
      <div className="w-fit flex flex-col gap-12">
        <form action="#" className="flex items-center gap-3">
          <input
            type="text"
            className=" w-full focus:outline-none px-5 py-[14px] bg-transparent border border-white"
            placeholder="Your email adress"
          />
          <button className="bg-white min-w-[174px] text-[#363636]  py-[14px] grid place-items-center border border-white uppercase font-bold text-base">
            let's talk
          </button>
        </form>
        <p className="w-[504px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dt nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
        </p>
        <div className="flex itemx-center gap-5">
          <div className="bg-white rounded-full w-10 h-10 grid place-items-center">
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
      </div>
      <div className="flex flex-col gap-14">
        <div className="flex items-center gap-40">
          <FooterNavbar title={`services`} />
          <FooterNavbar title={`general`} />
        </div>
        <p className="text-base font-normal">
          © Copyright 2024 ZS Creative. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default MiddleSection;
