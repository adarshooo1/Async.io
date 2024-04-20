import { ConnectionProviderProps } from "@/providers/connection-provider";
import { access } from "fs";
import { title } from "process";
import { boolean, string, z } from "zod";

export const EditProfileSchema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Required"),
});

export const WorkflowFormSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string().min(1, "Required"),
});

export type ConnectionTypes = "Google Drive" | "Notion" | "Slack" | "Discord";

export type Connection = {
  title: ConnectionTypes;
  description: string;
  icon: string;
  connectionKey: keyof ConnectionProviderProps;
  accessTokenKey?: string;
  alwaysTrue?: boolean;
  slackSpecial?: boolean;
};
