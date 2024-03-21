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
      className="rounded-md text-lg text-gray-700 
      bg-gray-100 focus:bg-gray-200 outline-none
      py-2 px-4 font-medium"
    />
  )
};

export default Input;