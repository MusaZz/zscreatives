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
      <section className="flex flex-col lg:gap-[60px] md:gap-12 sm:gap-10 gap-8 lg:px-16 md:px-14 sm:px-10 px-6 lg:py-7 md:py-5 sm:py-4 py-3">
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
        <div className="lg:px-40 flex items-center gap-3 flex-wrap justify-center">
          <div className="bg-[#FAFAFA] w-full md:w-[230px] h-[108px] grid place-items-center">
            <img src={WHO} alt="WHO" />
          </div>
          <div className="bg-[#FAFAFA] w-full md:w-[230px] h-[108px] grid place-items-center">
            <img src={Deloitte} alt="Deloitte" />
          </div>
          <div className="bg-[#FAFAFA] w-full md:w-[230px] h-[108px] grid place-items-center">
            <img src={Intertek} alt="Intertek" />
          </div>
          <div className="bg-[#FAFAFA] w-full md:w-[230px] h-[108px] grid place-items-center relative">
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
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
          <div className="relative group w-full h-full">
            <img src={Branding} className="w-full" alt="Branding" />
            <div className="absolute inset-0 bg-black bg-opacity-75  text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl font-bold uppercase">Branding</span>
            </div>
          </div>
          <div className="relative group w-full h-full">
            <img src={Development} className="w-full" alt="Development" />
            <div className="absolute inset-0 bg-black bg-opacity-75  text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl font-bold uppercase">development</span>
            </div>
          </div>
          <div className="relative group w-full h-full">
            <img src={Design} className="w-full" alt="Design" />
            <div className="absolute inset-0 bg-black bg-opacity-75  text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl font-bold uppercase">
                UX & UI Design
              </span>
            </div>
          </div>
          <div className="relative group w-full h-full">
            <img src={SEO} className="w-full" alt="SEO" />
            <div className="absolute inset-0 bg-black bg-opacity-75  text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl font-bold uppercase">SEO</span>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:pt-10 lg:pb-28">
        <div className="relative">
          <h5 className="text-white lg:text-[42px] md:text-2xl sm:text-xl text-base lg:px-10 md:px-9 sm:px-8 px-6 text-center w-full h-full grid place-items-center mx-auto lg:leading-[60px] md:leading-[44px] sm:leading-8 leading-6 font-medium absolute top-0 left-0 ">
            Social content. Social strategy. Social broadcasting. Social
            (platform) management. Paid social. Talks about social. Social
            gatherings.
          </h5>
          <img
            className="w-full max-sm:aspect-[16/8]"
            src={BlueMask}
            alt="BlueMask"
          />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
