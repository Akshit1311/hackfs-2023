"use client";

import React from "react";
import { cn } from "../../utils/helpers";

type InputProps = {
  type?: string;
  value: string;
  name?: string;
  className?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
};

const Input: React.FC<InputProps> = ({
  type,
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
    type={type ? type : "text"}
    placeholder={placeholder}
    className={cn(className, "w-full focus:outline-none")}
    name={name}
    value={value}
    onChange={(e) => onChange(e)}
  />
);
export default React.memo(Input);
