const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="lg:gap-[30px] md:gap-7 sm:gap-6 gap-5 flex flex-col">
      <h2 className="font-bold md:text-2xl text-xl  text-center uppercase">
        {title}
      </h2>
      <p className=" text-justify lg:px-28  sm:text-base text-sm">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
