// SkillCard.js
import React from "react";

const SkillCard = ({ icon, name }) => {
  return (
<div className="flex flex-col items-center border rounded-lg p-4 hover:bg-gray-100 transition min-h-[186px] min-w-[186px]">
      <div className="mb-2">{icon}</div>
      <div className="text-center">{name}</div>
    </div>
  );
};

export default SkillCard;
