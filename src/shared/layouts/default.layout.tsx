import { Header } from "@/widgets/header/header.component";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const DefaultLayout: FC = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};
