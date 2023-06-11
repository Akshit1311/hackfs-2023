"use client";

import React from "react";
import { cn } from "../../utils/helpers";

type ButtonProps = {
  size?: "sm";
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
    sm: "p-2 rounded font-mabry-normal text-base w-40",
  };

  return (
    <button
      type={type}
      className={cn(
        className,
        sizeMap[size],
        "flex items-center justify-center"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default React.memo(Button);
