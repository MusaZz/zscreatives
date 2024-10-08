import DigitalMarketing from "../../../../public/home/digital-marketing.png";
import WhatWeDoImage from "../../../../public/home/what-we-do.png";
import SectionTitle from "../SectionTitle";

const WhatWeDo = () => {
  return (
    <section
      style={{
        borderImage:
          "repeating-linear-gradient(90deg, #9747FF 0, #9747FF 10px, transparent 10px, transparent 20px) 1",
      }}
      className="py-5 border-y border-dashed border-[#9747FF]"
    >
      <img className="w-full" src={DigitalMarketing} alt="digital marketing" />
      <div className="flex items-center justify-between lg:px-16 md:px-14 sm:px-10 px-6 lg:py-14 sm:py-4 py-2">
        <div className="flex flex-col gap-16 w-[650px]">
          <SectionTitle title={`what we do`} />
          <h2 className="font-medium text-[42px] leading-[64px]">
            Social content. Social strategy. Social broadcasting. Social
            (platform) management. Paid social. Talks about social. Social
            gatherings.
          </h2>
          <p className="text-lg font-normal">
            Platform-specific, highly shareable, innovative, strategy-informed
            content that cuts through on social and delivers industry-leading
            ROI. That, and Craig David puns.
          </p>
        </div>
        <img src={WhatWeDoImage} alt="what we do" />
      </div>
    </section>
  );
};

export default WhatWeDo;
