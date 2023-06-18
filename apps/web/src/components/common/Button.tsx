"use client";

import React from "react";
import { cn } from "../../utils/helpers";

type ButtonProps = {
  size?: "sm" | "md" | "xl";
  type: "submit" | "reset" | "button";
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  type,
  className,
  onClick,
  children,
  size,
}) => {
  const sizeMap = {
    sm: "p-2 rounded font-mabry-normal text-base w-44",
    md: "p-4 text-xl rounded ",
    xl: "px-6 py-3 rounded-lg w-56 text-2xl",
  };

  return (
    <button
      type={type}
      className={cn(
        className,
        sizeMap[size],
        "flex items-center justify-center transition-all duration-500 ease-in-out"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default React.memo(Button);
