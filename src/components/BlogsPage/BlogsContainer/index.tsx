import { blogs } from "../../lib/constants";
import BlogItem from "./BlogItem";

const BlogsContainer = () => {
  return (
    <ul className="grid grid-cols-3 gap-5 pb-[422px]">
      {blogs.map((b) => (
        <BlogItem key={b.id} imageUrl={b.imageUrl} title={b.title} />
      ))}
    </ul>
  );
};

export default BlogsContainer;
