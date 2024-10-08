import { services } from "../../lib/constants";
import ServiceItem from "./ServiceItem";

const ServiceContainer = () => {
  return (
    <section className="lg:px-16 md:px-10  lg:pt-12 md:pt-10 sm:pt-8 pt-6 lg:pb-36 md:pb-32 sm:pb-28 pb-24 ">
      <ul className="flex flex-col gap-10 lg:px-8 md:px-7 ">
        {services.map((s, index) => (
          <ServiceItem
            key={index}
            title={s.title}
            button={s.button}
            path={s.path}
            imageUrl={s.imageUrl}
            index={index}
            description={s.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default ServiceContainer;
