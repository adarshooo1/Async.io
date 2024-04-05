import React from "react";

type Props = {};

const Logs = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 relative m-2">
      <h1 className="md:text-4xl text-2xl sticky top-0 z-[100] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Logs
      </h1>
    </div>
  );
};

export default Logs;
