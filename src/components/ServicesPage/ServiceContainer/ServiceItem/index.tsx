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
    className={`grid gap-3 items-center md:grid-cols-2 ${
      index % 2 === 1 ? "md:grid-flow-dense md:[&>*:first-child]:order-2" : ""
    }`}
  >
      <div className="group overflow-hidden max-md:w-full ">
        <img
          className="group-hover:scale-[1.15] duration-500 w-full"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="flex flex-col lg:gap-9 md:gap-5 sm:gap-4 gap-3 ">
        <h2 className="lg:text-[32px] md:text-[28px] sm:text-2xl text-xl font-bold">
          {title}
        </h2>
        <p className="text-sm md:max-w-[360px] lg:max-w-[440px]">
          {description}
        </p>
        <div className="flex lg:flex-row flex-col items-start lg:items-center gap-4 justify-between">
          <Pros />
          <div className="lg:block hidden">
            <Pros />
          </div>
        </div>
        <Link to={`/service/${path}`}>
          <button className="flex items-center md:gap-4 sm:gap-3 gap-2">
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
