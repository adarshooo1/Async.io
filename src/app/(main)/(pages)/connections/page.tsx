import React from "react";

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className="md:text-4xl text-2xl sticky top-0 z-[100] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b font-semibold">
        Connections
      </h1>
      <div className="p-6">
        {/* Further Content */}

      </div>
    </div>
  );
};

export default Category;
