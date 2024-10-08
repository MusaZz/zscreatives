import React from "react";
import { Link } from "react-router-dom";
import LongArrowRight from "../../../../Icons/LongArrowRight";

interface Props {
  service: string;
  imageUrl: string;
  path: string;
  setHoveredImage: (url: string) => void;
}

const ListItem: React.FC<Props> = ({
  service,
  imageUrl,
  setHoveredImage,
  path,
}) => {
  return (
    <li
      onMouseEnter={() => setHoveredImage(imageUrl)}
      onMouseLeave={() => setHoveredImage("")}
      className="hover:translate-x-6 group"
    >
      <Link to={`service/${path}`}>
        <div className="flex items-center gap-5">
          <span className="font-medium lg:text-[28px] md:text-2xl sm:text-xl text-lg">
            {service}
          </span>
          <div className="hidden group-hover:block">
            <LongArrowRight />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
