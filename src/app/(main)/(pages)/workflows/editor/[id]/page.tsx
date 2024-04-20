import { DotCanvas } from "@/components/ui/dot-canvas";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <DotCanvas>
      <div className="w-full h-full overflow-x-scroll p-6 pb-20">
        Current Workflow
      </div>
    </DotCanvas>
  );
};

export default page;
