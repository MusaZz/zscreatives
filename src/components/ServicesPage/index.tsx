import PageTitle from "../PageTitle";
import ServiceContainer from "./ServiceContainer";

const ServicesPage = () => {
  return (
    <main className="lg:px-16 md:px-14 sm:px-10 px-6 lg:py-6 sm:py-4 py-2">
      <PageTitle title={`services`} />
      <ServiceContainer />
    </main>
  );
};

export default ServicesPage;
