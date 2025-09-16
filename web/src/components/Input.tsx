import React from "react";

interface InputProps {
  type: "text" | "password",
  name: string,
  placeholder: string
};

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="bg-white/35 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full focus:bg-white/55
      font-normal text-lg flex items-center gap-2 shadow-lg w-[17.25rem] outline-none placeholder:text-white/70"
    />
  )
};

export default Input;