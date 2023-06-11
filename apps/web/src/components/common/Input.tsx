"use client";

import React from "react";
import { cn } from "../../utils/helpers";

type InputProps = {
  value: string;
  name?: string;
  className?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  className,
  name,
  value,
  onChange,
  autoFocus,
}) => (
  <input
    autoFocus={autoFocus}
    autoComplete="off"
    type="text"
    placeholder={placeholder}
    className={cn(className, "w-full border-none focus:outline-none")}
    name={name}
    value={value}
    onChange={(e) => onChange(e)}
  />
);
export default Input;
