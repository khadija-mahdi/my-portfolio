// SkillCard.js
import React from "react";

const SkillCard = ({ icon, name }) => {
  return (
<div className="flex flex-col items-center justify-center gap-4 border rounded border-black  hover:bg-gray-100 transition lg:h-[180px] lg:w-[180px] max-h-[186px] max-w-[186px] min-h-[100px] min-w-[100px]">
      <div className="mb-2">{icon}</div>
      <div className="text-center font-bold">{name}</div>
    </div>
  );
};

export default SkillCard;
