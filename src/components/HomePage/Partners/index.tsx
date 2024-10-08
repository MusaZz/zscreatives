import MarqueeSlider from "react-marquee-slider";
import PartnerLogos from "../../../../public/home/partners-1.png";

const Partners = () => {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold">Partnership with top companies</h1>
      {/* TypeScript ignore workaround */}
      <MarqueeSlider
        velocity={75}
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
