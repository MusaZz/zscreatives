import React, { useEffect, useState } from "react";

interface Props {
  imageUrl: string;
  name: string;
  comment: string;
}

const Comment: React.FC<Props> = ({ imageUrl, name, comment }) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    setImageSrc(imageUrl);
  }, [imageUrl]);
  return (
    <li className="py-9 px-6 flex flex-col gap-9 shadow-lg">
      <p>
        {comment} <span className="font-bold text-[#33C1FF]">See more</span>
      </p>
      <div className="flex items-center gap-5">
        <img src={imageSrc} alt={name} />
        <h5 className="font-medium text-lg">{name}</h5>
      </div>
    </li>
  );
};

export default Comment;
