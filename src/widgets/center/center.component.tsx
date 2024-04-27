import { FC, HTMLAttributes } from "react";

export const Center: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <div
    className="w-full min-h-screen max-w-[1232px] m-auto pr-3 pl-3 pt-[80px]"
    {...props}
  />
);
