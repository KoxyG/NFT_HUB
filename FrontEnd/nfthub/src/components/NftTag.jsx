import React from "react";

const NftTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white  rounded-md bg-[#ff9c72]"
    : "text-[#ADB7BE] bg-[#585756] border-slate-600 cursor-pointer hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-md border-2 text-md sm:text-xl `}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default NftTag;