import { DotCanvas } from "@/components/ui/dot-canvas";
import React from "react";
import WorkFlowButton from "./_components/workflow-button";
import Workflows from "./_components";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="md:text-4xl text-2xl top-0 z-20 p-6 bg-background/50 backdrop-blur-lg flex items-center justify-between border-b font-semibold">
        Workflows
        <WorkFlowButton />
      </h1>
      <div className="p-6 overflow-y-scroll h-full pb-20">
        {/* Further Content */}
        <Workflows />
        <Workflows />
        <Workflows />
        <Workflows />
        <Workflows />
        <Workflows />
        <Workflows />
        <Workflows />
      </div>
    </div>
  );
};

export default page;
