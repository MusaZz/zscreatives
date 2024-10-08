const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="md:text-2xl text-xl font-bold text-[#33C1FF] tracking-[0.18rem] uppercase">
      {title}
    </h3>
  );
};

export default SectionTitle;
