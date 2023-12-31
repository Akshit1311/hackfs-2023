import React from "react";
import { cn } from "../../utils/helpers";

type TitleProps = {
  title: string;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ title, className }) => (
  <h2 className={cn(className, "text-white font-bold")}>{title}</h2>
);
export default React.memo(Title);
