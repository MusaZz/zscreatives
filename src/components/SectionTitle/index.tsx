const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h2 className="font-bold text-2xl text-center uppercase">{title}</h2>
      <p className=" text-justify px-28">{description}</p>
    </div>
  );
};

export default SectionTitle;
