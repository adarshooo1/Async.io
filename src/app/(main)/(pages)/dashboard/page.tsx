import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="md:text-4xl text-2xl top-0 z-20 p-6 bg-background/50 backdrop-blur-lg flex items-center border-b font-semibold">
        Dashboard
      </h1>
      <div className="p-6 overflow-y-scroll h-full pb-32">
        {/* Further Content */}
      </div>
    </div>
  );
};

export default DashboardPage;
