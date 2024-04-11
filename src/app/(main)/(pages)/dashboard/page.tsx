import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-col relative gap-4">
      <h1 className="md:text-4xl text-2xl sticky top-0 z-[100] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Dashboards
      </h1>
      <div className="p-6">{/* Further Content */}</div>
    </div>
  );
};

export default DashboardPage;
