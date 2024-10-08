import Hero from "../../../public/blogs/blog-hero.png";
import PageTitle from "../PageTitle";
import BlogsContainer from "./BlogsContainer";

const BlogsPage = () => {
  return (
    <main>
      <section className="lg:relative">
        <div className="lg:absolute lg:top-8 lg:left-16 max-lg:text-center">
          <PageTitle title={`Blogs`} />
        </div>
        <img className="w-full" src={Hero} alt="hero" />
      </section>
      <section className="lg:px-16 md:px-14 sm:px-10 px-6 lg:py-6 sm:py-4 py-2 flex flex-col lg:gap-[30px] md:gap-7 sm:gap-6 gap-5">
        <h2 className="font-bold md:text-2xl text-xl text-center uppercase">
          Lorem ipsum dolor sit amet, consectetu elit,
        </h2>
        <p className=" text-justify lg:px-28 sm:text-base text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in.
          Reprehendein voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa
        </p>
        <BlogsContainer />
      </section>
    </main>
  );
};

export default BlogsPage;
