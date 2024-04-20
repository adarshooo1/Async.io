import React from "react";
import Workflow from "./workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <section className="flex flex-col gap-4 py-3">
      <Workflow
        id="203909876782"
        name="Automation Workflow"
        description="Creating a text workflow"
        publish={false}
      />
    </section>
  );
};

export default Workflows;
