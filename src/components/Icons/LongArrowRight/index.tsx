import React from "react";

interface Props {
  href?: boolean;
}

const LongArrowRight: React.FC<Props> = ({ href }) => {
  return (
    <svg
      width="33"
      height="9"
      viewBox="0 0 33 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        href ? "group-hover:fill-[#363636] " : "group-hover:fill-white "
      }`}
    >
      <path
        d="M32.5 4.75L29 0.75V8.25L32.5 4.75Z"
        fill={`${href ? "[#363636] " : "currentColor "}`}
      />
      <rect
        y="3.75"
        width="29"
        height="2"
        fill={`${href ? "[#363636] " : "currentColor "}`}
      />
    </svg>
  );
};

export default LongArrowRight;
