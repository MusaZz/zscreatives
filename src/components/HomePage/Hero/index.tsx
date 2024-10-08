import HeroImage from "../../../../src/../public/home/animation.png";
import Business from "../../../../src/../public/home/business.png";

const Hero = () => {
  return (
    <section className="flex justify-between lg:px-16 md:px-14 sm:px-10 px-6 lg:pt-6 sm:pt-4 pt-2">
      <div className="flex flex-col gap-11">
        <div>
          <h1 className="font-bold text-[85px]">Create your</h1>
          <img src={Business} alt="Business" />
        </div>
        <p className="text-base font-normal w-[480px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.labore et
          dolore magna aliqua.{" "}
          <span className="text-[#33C1FF] font-bold underline">See more</span>
        </p>
        <form action="#" className="flex items-center gap-3">
          <input
            type="text"
            className=" w-full focus:outline-none px-5 py-[14px] bg-transparent border border-[#DCE1E5] focus:border-[#111]"
            placeholder="Your email adress"
          />
          <button className="bg-[#363636] min-w-[174px] hover:text-[#363636] hover:bg-[white] duration-300 text-white  py-[14px] grid place-items-center border border-[#363636] uppercase font-bold text-base">
            let's talk
          </button>
        </form>
      </div>
      <img src={HeroImage} alt="Hero" />
    </section>
  );
};

export default Hero;
