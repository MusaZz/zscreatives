import { useState } from "react";
import SectionTitle from "../SectionTitle";
import List from "./List";

const Services = () => {
  const [hoveredImage, setHoveredImage] = useState<string>("");

  return (
    <section
      style={{
        backgroundImage: `url(${hoveredImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" duration-300  lg:px-16 md:px-14 sm:px-10 px-6 lg:pt-12  sm:pt-4 pt-2 lg:pb-48 md:pb-44 sm:pb-36 pb-28 flex flex-col gap-28"
    >
      <SectionTitle title="we specialize in" />
      <List setHoveredImage={setHoveredImage} />
    </section>
  );
};

export default Services;
