import ContactUsImage from "../../../../public/home/contact-us.png";
import Form from "./Form";

const ContactUs = () => {
  return (
    <section className="flex lg:flex-row flex-col">
      <div className="bg-[#F4F4F6] lg:p-16 md:p-12 sm:p-8 p-5 lg:w-2/5 w-full max-lg:order-2 flex flex-col gap-11">
        <div className="flex flex-col gap-5">
          <h2 className="text-[30px] font-bold uppercase tracking-wider">
            Contact us
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        <Form />
      </div>
      <div className="lg:w-3/5 w-full group overflow-hidden max-lg:order-1 relative">
        <h2 className="absolute top-1/3 -translate-y-1/3 left-0 text-white lg:text-[72px] md:text-[60px] sm:text-[56px] text-[40px] z-10 text-center  w-full mx-auto ">
          We’d love to help
        </h2>
        <img
          className="group-hover:scale-[1.15] lg:h-full duration-500 w-full"
          src={ContactUsImage}
          alt="ContactUsImage"
        />
      </div>
    </section>
  );
};

export default ContactUs;
