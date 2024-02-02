import { cn } from "@/lib/utils";
import { ReactNode } from "react";
type TContainerProps = {
  children: ReactNode;
  className?: string;
};
const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={cn("max-w-[1230px] mx-auto px-[20px] w-full", className)}>
      {children}
    </div>
  );
};
// className="bg-green-500 max-w-[1220px] mx-auto px-[20px]"
export default Container;
