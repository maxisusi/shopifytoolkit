import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
export const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className=" max-w-screen-xl m-auto h-full">{props.children}</div>

      <Footer />
    </div>
  );
};
