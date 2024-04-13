import Sidebar from "@/components/sidebar";
import InfoBar from "@/infobar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="flex h-screen dark:bg-black overflow-hidden">
      <Sidebar />
      <div className="w-full h-full">
        <InfoBar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
