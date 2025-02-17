import { Outlet } from "react-router-dom";

import { Header } from "../Layout/Header";
import { Footer } from "../Layout/Footer";
export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
