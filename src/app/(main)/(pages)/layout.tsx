import React from "react";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="border-l-[1px] border-t-[1px] h-screen rounded-tl-3xl border-muted-foreground/20 overflow-y-scroll dark:bg-neutral-950">
      {children}
    </div>
  );
};

export default Layout;
