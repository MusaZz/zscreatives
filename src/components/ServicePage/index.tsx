import { useParams } from "react-router-dom";
import PageTitle from "../PageTitle";
import { services } from "../lib/constants";
import { useEffect, useState } from "react";

const ServicePage = () => {
  const { id } = useParams();

  const service = services.find((s) => s.path === id)!;

  const [imageSrc, setImageSrc] = useState<string>("");
  const [colorSrc, setColorSrc] = useState<string>("");

  useEffect(() => {
    setImageSrc(service.backgroundImageUrl);
  }, [service.backgroundImageUrl]);

  useEffect(() => {
    setColorSrc(service.backgroundColorUrl);
  }, [service.backgroundColorUrl]);

  return (
    <main className="lg:pb-[850px] md:pb-[600px] sm:pb-[400px] pb-[360px]">
      <div className="lg:px-16 md:px-14 sm:px-10 px-6 lg:py-6 sm:py-4 py-2 md:text-left text-center">
        <PageTitle title={service.title} />
      </div>
      <div className="flex h-[412px] items-center gap-6 mt-2.5">
        <img
          src={imageSrc}
          className="w-full h-full md:object-cover"
          alt={service.title}
        />
        <img
          src={colorSrc}
          className=" md:block hidden w-[330px] h-full"
          alt={service.title}
        />
      </div>
      <div className="lg:px-16 md:px-14 sm:px-10 px-6 lg:py-12 md:py-8 sm:py-6 py-3">
        <p>{service.description}</p>
      </div>
    </main>
  );
};

export default ServicePage;
