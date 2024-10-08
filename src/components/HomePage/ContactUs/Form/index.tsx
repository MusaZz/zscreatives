import LongArrowRight from "../../../Icons/LongArrowRight";
import Input from "./Input";

const Form = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex sm:flex-row flex-col items-center gap-3 w-full">
        <Input label="First name" />
        <Input label="Last name" />
      </div>
      <Input label="Email" />
      <Input label="Phone number" />
      <Input label="Leave message" />
      <div className="flex items-center gap-3">
        <input type="checkbox" className="w-6 h-6 bg-white border border-[#DCE1E5] outline-none rounded-sm" />
        <p className="text-base font-normal">You agree to our friendly <span className="underline">Privacy & Policy</span></p>
      </div>
      <button className="flex items-center gap-2.5 border-2  duration-300 group bg-[#363636] hover:text-[#363636] hover:bg-white text-white w-full border-[#363636]  h-[58px] justify-center">
        <span className="uppercase font-bold">send a message</span>
        <LongArrowRight />
      </button>
    </form>
  );
};

export default Form;
