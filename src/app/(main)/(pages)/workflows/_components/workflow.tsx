import React from "react";

// ShadCn Prebuild Components:
// Card
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Switch
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Toast Notification using Sonner : bun add sonner/ npm install sonner
import { toast } from "sonner";

import Link from "next/link";
import Image from "next/image";

// props
type Props = {
  id: string;
  name: string;
  description: string;
  publish: boolean | null;
};

// Workflow Template : Which will be used by all workflow items.
const Workflow = ({ id, name, description, publish }: Props) => {
  return (
    // Card Component which has a individual Workflow
    <Card className="flex w-full items-center justify-between">
      <CardHeader>
        <Link href={`/workflows/editor/${id}`}>
          <div className="flex flex-row gap-2">
            <Image
              src="/GoogleDrive.png"
              alt="google-drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/Notion.png"
              alt="notion"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/Discord.png"
              alt="discord"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/Slack.png"
              alt="discord"
              height={30}
              width={30}
              className="object-contain"
            />
          </div>
          <div className="mt-2">
            <CardTitle className="text-lg ">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </Link>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4">
        <Label htmlFor="publish">Off</Label>
        <Switch id="publish" />
      </div>
    </Card>
  );
};

export default Workflow;
