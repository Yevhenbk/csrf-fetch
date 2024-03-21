import React from "react";

interface ButtonProps {
  children: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  arialLabel: string,
  type: "submit" | "reset" | "button" | undefined
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  arialLabel,
  type
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      aria-label={arialLabel}
      className="bg-blue-700 text-white font-medium
      text-lg py-2 px-6 rounded-md hover:bg-blue-800"
    >
      {children}
    </button>
  )
}

export default Button