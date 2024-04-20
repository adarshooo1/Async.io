"use client";
import React from "react";
import WorkflowForm from "@/components/forms/workflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/model-provider";
import { Plus } from "lucide-react";

type Props = {};

const WorkFlowButton = (props: Props) => {
  const { setOpen, setClose } = useModal();
  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a workflow automation"
        subheading="Workflows are a powerful that help you automate tasks"
      >
        <WorkflowForm />
      </CustomModal>
    );
  };
  return (
    <Button className="flex flex-rows" onClick={handleClick} size={"icon"}>
      <Plus className="h-4 w-4 mx-2" />
    </Button>
  );
};

export default WorkFlowButton;
