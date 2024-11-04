"use client";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    title: z.string(),
    price: z.coerce.number().min(1).multipleOf(0.01).optional(),
    rating: z.coerce.number().min(0).max(5).optional(),
    coverImage: z.string().url(),
    categories: z.string(),
  })
  .required();

const CreateCourseForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: 100,
      rating: 3,
      coverImage: "",
      categories: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (isLoading) return;
    setIsLoading(true);
    const response = await fetch("/courses/api/create", {
      method: "POST",
      body: JSON.stringify(values),
    });
    setIsLoading(false);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input className="input-form" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Categories</FormLabel>
              <FormControl>
                <Input className="input-form" placeholder="React" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input className="input-form" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input className="input-form" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="coverImage"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Cover Image</FormLabel>
              <FormControl>
                <Input className="input-form" placeholder="Enter a valid url to an image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="rounded-full bg-edunity-primary text-white font-normal px-10 py-5" type="submit" disabled={isLoading}>
          {!isLoading ? "Create" : <LoaderCircle className="animate-spin" />}
        </Button>
      </form>
    </Form>
  );
};

export default CreateCourseForm;
