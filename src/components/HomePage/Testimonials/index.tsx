import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { testimonials } from "../../lib/constants";
import Comment from "./Comment";

const Testimonials = () => {
  return (
    <section className="lg:px-16 md:px-14 sm:px-10 px-6 md:pt-14 sm:pt-4 pt-2 md:pb-28 sm:pb-8 pb-4 flex flex-col lg:gap-12 md:gap-8 sm:gap-6 gap-5">
      <h3 className="md:text-2xl text-xl text-center text-[#33C1FF] font-bold">
        What clients say about our work
      </h3>
      <div className="flex items-center md:gap-5 gap-4">
        <FaChevronLeft fill="#33C1FF" className="text-6xl" />
        <ul className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
          {testimonials.map((t) => (
            <Comment
              key={t.id}
              name={t.name}
              comment={t.comment}
              imageUrl={t.imageUrl}
            />
          ))}
        </ul>
        <FaChevronRight fill="#33C1FF" className="text-6xl" />
      </div>
    </section>
  );
};

export default Testimonials;
