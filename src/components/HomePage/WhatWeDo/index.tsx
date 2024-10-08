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
      <div className="flex lg:flex-row flex-col lg:gap-12 md:gap-8 sm:gap-6 gap-5 items-center justify-between lg:px-16 md:px-14 sm:px-10 px-6 lg:py-14 sm:py-4 py-2">
        <div className="flex flex-col lg:gap-16 md:gap-12 sm:gap-6 gap-5 lg:w-[650px]">
          <SectionTitle title={`what we do`} />
          <h2 className="font-medium lg:text-[42px] md:text-[38px] sm:text-3xl text-2xl lg:leading-[64px] md:leading-[56px] sm:leading-10 leading-9">
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
