import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  arialLabel: string;
  type: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  arialLabel,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={arialLabel}
      className="bg-white/15 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full 
      font-semibold text-lg flex items-center gap-2 shadow-lg w-[17.25rem] flex justify-center 
      hover:bg-white/20 transition"
    >
      {children}
    </button>
  );
};

export default Button;
