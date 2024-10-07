import { Link } from "react-router-dom";
import LongArrowRight from "../../../Icons/LongArrowRight";
import { useEffect, useState } from "react";
import Pros from "./Pros";

interface ServiceItemProps {
  title: string;
  imageUrl: string;
  path: string;
  button: string;
  index: number;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  imageUrl,
  path,
  button,
  index,
  description,
}) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    setImageSrc(imageUrl);
  }, [imageUrl]);

  return (
    <li
      className={`flex items-center justify-between ${
        index % 2 === 1 ? "flex-row-reverse" : ""
      }`}
    >
      <div className="group overflow-hidden">
        <img
          className="group-hover:scale-[1.15] duration-500"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-9 max-w-[440px]">
        <h2 className="text-[32px] font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex items-center justify-between">
          <Pros />
          <Pros />
        </div>
        <Link to={`/service/${path}`}>
          <button className="flex items-center gap-4">
            <span className="font-bold text-base tracking-widest">
              {button}
            </span>
            <LongArrowRight />
          </button>
        </Link>
      </div>
    </li>
  );
};

export default ServiceItem;
