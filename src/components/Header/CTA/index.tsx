import { Link } from "react-router-dom";
import LongArrowRight from "../../Icons/LongArrowRight";

const CTA = () => {
  return (
    <button className=" lg:block hidden  border-2  duration-300 group hover:bg-[#363636] hover:text-white border-[#363636] w-[174px] h-[58px] ">
      <Link to={`/contact`} className="justify-center gap-2.5 flex items-center">
        <span className="uppercase font-bold">contact</span>
        <LongArrowRight />
      </Link>
    </button>
  );
};

export default CTA;
