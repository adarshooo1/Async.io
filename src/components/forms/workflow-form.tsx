import { WorkflowFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
};

const WorkflowForm = ({ title, subtitle }: Props) => {
  // Setting Props for the Form Naming /Workflow Naming
  const form = useForm<z.infer<typeof WorkflowFormSchema>>({
    resolver: zodResolver(WorkflowFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const isLoading = form.formState.isLoading;
  const router = useRouter();

  // Forms Functionality:
  const handleSubmit = () => {};

  return (
    <Card className="w-full max-w-[650px] border-none">
      {title && subtitle && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
      )}
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-4 text-left"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Async.io Automation" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              disabled={isLoading}
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Left over your automation with async.io"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader className="mr-2 w-4 h-4 animate-spin" /> Saving
                </>
              ) : (
                "Save Workflow"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default WorkflowForm;
