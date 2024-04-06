import Sidebar from "@/components/sidebar";
import InfoBar from "@/infobar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="flex h-full dark:bg-black overflow-hidden">
      <Sidebar />
      <div className="w-full h-screen">
        <InfoBar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
