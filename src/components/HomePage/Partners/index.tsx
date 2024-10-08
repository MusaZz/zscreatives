import MarqueeSlider from "react-marquee-slider";
import PartnerLogos from "../../../../public/home/partners-1.png";
import { useEffect, useState } from "react";

const Partners = () => {
  const [velocity, setVelocity] = useState(75);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1200) {
        setVelocity(75);
      } else if (width > 768) {
        setVelocity(50);
      } else {
        setVelocity(25);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex flex-col lg:gap-10 md:gap-9 sm:gap-7 gap-6">
      <h1 className="lg:text-3xl sm:text-2xl text-xl font-bold">
        Partnership with top companies
      </h1>
      {/* TypeScript ignore workaround */}
      <MarqueeSlider
        velocity={velocity}
        resetAfterTries={200}
        // @ts-ignore: Bypass type checking for this line
        loop={true}
      >
        <img src={PartnerLogos} alt="Partner 1" style={{ margin: "0 20px" }} />
        <img src={PartnerLogos} alt="Partner 2" style={{ margin: "0 20px" }} />
        <img src={PartnerLogos} alt="Partner 3" style={{ margin: "0 20px" }} />
        <img src={PartnerLogos} alt="Partner 4" style={{ margin: "0 20px" }} />
      </MarqueeSlider>
    </section>
  );
};

export default Partners;
