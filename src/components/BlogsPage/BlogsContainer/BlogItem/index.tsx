import React, { useEffect, useState } from "react";

interface BlogItemProps {
  title: string;
  imageUrl: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ title, imageUrl }) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    setImageSrc(imageUrl);
  }, [imageUrl]);

  return (
    <li className="flex flex-col gap-4">
      <div className="group overflow-hidden">
        <img
          className="group-hover:scale-[1.15] duration-500"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="flex items-center gap-5 pl-2.5">
        <div className="h-[132px] bg-[#33C1FF] w-2 leading-6"></div>
        <div className="flex flex-col items-start h-full justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <button className="text-base font-bold text-[#33C1FF]">
            Read more
          </button>
        </div>
      </div>
    </li>
  );
};

export default BlogItem;
