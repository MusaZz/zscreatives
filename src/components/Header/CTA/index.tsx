import LongArrowRight from "../../Icons/LongArrowRight";

const CTA = () => {
  return (
    <button className=" lg:flex hidden items-center gap-2.5 border-2  duration-300 group hover:bg-[#363636] hover:text-white border-[#363636] w-[174px] h-[58px] justify-center">
      <span className="uppercase font-bold">contact</span>
      <LongArrowRight />
    </button>
  );
};

export default CTA;
