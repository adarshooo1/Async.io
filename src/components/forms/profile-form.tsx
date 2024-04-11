"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React, { use, useEffect, useState } from "react";
import { EditProfileSchema } from "@/lib/schema";
import { Loader2 } from "lucide-react";

type Props = {
  user: any;
  onUpdate?: any;
};

const ProfileForm = ({ user, onUpdate }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [user, setUser] = useState(null);

  // 1. Define your form using zod.
  const form = useForm<z.infer<typeof EditProfileSchema>>({
    mode: "onChange",
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  useEffect(() => {
    form.reset({ name: user.name, email: user.email });
  }, [user.name]);

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof EditProfileSchema>) => {
    setIsLoading(true);
    await onUpdate(values.name);
    setIsLoading(false);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Full Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="John Doe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">E-mail</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  disabled={true}
                  placeholder="johndoe@gmail.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="self-start min-w-28
        hover:bg-[#6720c3] dark:hover:text-white dark:border-white hover:text-white text-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-1" />
              saving
            </>
          ) : (
            "Save User"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
