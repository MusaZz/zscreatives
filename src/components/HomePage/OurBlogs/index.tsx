import BlogItem from "../../BlogsPage/BlogsContainer/BlogItem";
import LongArrowRight from "../../Icons/LongArrowRight";
import { blogs } from "../../lib/constants";
import SectionTitle from "../SectionTitle";

const OurBlogs = () => {
  return (
    <section className="lg:px-16 md:px-14 sm:px-10 px-6 lg:pt-6 sm:pt-4 pt-2 lg:pb-24 md:pb-20 sm:pb-14 pb-10">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col lg:gap-12 md:gap-10 sm:gap-7 gap-5">
          <SectionTitle title={`our blogs`} />
          <div className="flex md:flex-row flex-col items-center justify-between gap-5 sm:gap-7 md:gap-8">
            <p className="md:max-w-[800px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="flex items-center gap-2.5 border-2 min-w-[174px]  duration-300 group hover:bg-[#363636] hover:text-white border-[#363636]  h-[58px] justify-center">
              <span className="uppercase font-bold">subscribe</span>
              <LongArrowRight />
            </button>
          </div>
        </div>
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {blogs.slice(0, 3).map((b) => (
            <BlogItem key={b.id} imageUrl={b.imageUrl} title={b.title} />
          ))}
        </ul>
        <button className=" mt-5 flex items-center w-fit gap-2.5 text-[#363636] border-b hover:border-[#363636]  ">
          <span className="uppercase font-bold">see all blogs</span>
          <LongArrowRight />
        </button>
      </div>
    </section>
  );
};

export default OurBlogs;
