// data
import { blogs } from "../../lib/constants";

// components
import BlogItem from "./BlogItem";

const BlogsContainer = () => {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:pb-[422px] md:pb-[360px] sm:pb-[300px] pb-[280px]">
      {blogs.map((b) => (
        <BlogItem key={b.id} imageUrl={b.imageUrl} title={b.title} />
      ))}
    </ul>
  );
};

export default BlogsContainer;
