import Hero from "../../../public/about/about-hero.png";
import WHO from "../../../public/about/partners-1.png";
import Deloitte from "../../../public/about/partners-2.png";
import Intertek from "../../../public/about/partners-3.png";
import Budget from "../../../public/about/partners-4.png";
import TeamBanner from "../../../public/about/about-team.png";
import SectionTitle from "../SectionTitle";
import Branding from "../../../public/about/portfolio-1.png";
import Development from "../../../public/about/portfolio-2.png";
import Design from "../../../public/about/portfolio-3.png";
import SEO from "../../../public/about/portfolio-4.png";
import BlueMask from "../../../public/about/blue-mask.png";

const AboutPage = () => {
  return (
    <main>
      <img className="w-full" src={Hero} alt="Hero" />
      <section className="flex flex-col gap-[60px] lg:px-16 md:px-14 sm:px-10 px-6 lg:py-7 sm:py-4 py-2">
        <SectionTitle
          title={`Lorem ipsum dolor sit amet, consectetu elit,`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in. Reprehendein voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. prehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborumprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est`}
        />
        <div className="px-40 flex items-center justify-between">
          <div className="bg-[#FAFAFA] w-[230px] h-[108px] grid place-items-center">
            <img src={WHO} alt="WHO" />
          </div>
          <div className="bg-[#FAFAFA] w-[230px] h-[108px] grid place-items-center">
            <img src={Deloitte} alt="Deloitte" />
          </div>
          <div className="bg-[#FAFAFA] w-[230px] h-[108px] grid place-items-center">
            <img src={Intertek} alt="Intertek" />
          </div>
          <div className="bg-[#FAFAFA] w-[230px] h-[108px] grid place-items-center relative">
            <img src={Budget} alt="Budget" className="absolute -top-4" />
          </div>
        </div>
      </section>
      <section className="lg:py-7 sm:py-4 py-2">
        <img className="w-full" src={TeamBanner} alt="TeamBanner" />
      </section>
      <section className="lg:px-16 md:px-14 sm:px-10 px-6 lg:py-7 sm:py-4 py-2 flex flex-col gap-11">
        <SectionTitle
          title={`Our portfolio`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.`}
        />
        <div className="grid grid-cols-4 gap-2.5">
          <img src={Branding} alt="Branding" />
          <img src={Development} alt="Development" />
          <img src={Design} alt="Design" />
          <img src={SEO} alt="SEO" />
        </div>
      </section>
      <section className="lg:pt-10 lg:pb-28">
        <div className="relative">
          <h5 className="text-white text-[42px] font-medium absolute top-[174px] left-[100px] leading-[63px]">
            Social content. Social strategy. Social broadcasting. Social
            (platform) management. Paid social. Talks about social. Social
            gatherings.
          </h5>
          <img className="w-full" src={BlueMask} alt="BlueMask" />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
