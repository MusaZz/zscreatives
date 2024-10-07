import { services } from "../../lib/constants";
import ServiceItem from "./ServiceItem";

const ServiceContainer = () => {
  return (
    <section className="lg:px-16 md:px-14 sm:px-10 px-6 lg:py-12 sm:py-6 py-4">
      <ul className="flex flex-col gap-10 lg:px-8 md:px-7 sm:px-5 px-3">
        {services.map((s, index) => (
          <ServiceItem
            key={index}
            title={s.title}
            button={s.button}
            path={s.path}
            imageUrl={s.imageUrl}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
};

export default ServiceContainer;
