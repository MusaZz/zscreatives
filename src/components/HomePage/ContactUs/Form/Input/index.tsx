const Inpit = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      <label className="text-xs font-medium" htmlFor={label}>
        {label}
        <sup>*</sup>
      </label>
      {label === "Leave message" ? (
        <textarea
          id={label}
          name={label}
          className="bg-white rounded-sm border border-[#DCE1E5] w-full focus:outline-none focus:border-[#1e1e1e] px-4 py-2 resize-none"
          rows={5} 
        />
      ) : (
        <input
          id={label}
          name={label}
          type="text"
          className="bg-white rounded-sm border border-[#DCE1E5] w-full focus:outline-none focus:border-[#1e1e1e] px-4 py-2"
        />
      )}
    </div>
  );
};

export default Inpit;
