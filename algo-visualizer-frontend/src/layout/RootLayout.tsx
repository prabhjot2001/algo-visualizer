import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

type RootLayoutPropsType = {
  children: ReactNode;
};

const RootLayout = () => {
  return (
    <div className={`container w-auto`}>
      <Outlet />
    </div>
  );
};

export default RootLayout;
