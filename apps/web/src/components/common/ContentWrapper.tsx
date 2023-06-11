import React from "react";
import { cn } from "../../utils/helpers";

type MainWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

const MainWrapper: React.FC<MainWrapperProps> = ({ className, children }) => {
  return (
    <section
      className={cn(
        "max-w-screen-8xl mx-auto p-2 text-white block md:px-20",
        className
      )}
    >
      {children}
    </section>
  );
};
export default React.memo(MainWrapper);
