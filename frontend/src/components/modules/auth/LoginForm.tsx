"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginZodValidation } from "./loginValidation";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const form = useForm({ resolver: zodResolver(loginZodValidation) });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <label>Email</label>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  value={field.value || ""}
                  className="rounded-full placeholder:text-gray-400 placeholder:text-[13px]"
                  placeholder="Enter your email"
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <label>Password</label>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPass ? "text" : "password"}
                    {...field}
                    value={field.value || ""}
                    className="rounded-full placeholder:text-gray-400 placeholder:text-[13px]"
                    placeholder="*********"
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-3 right-3 cursor-pointer"
                  >
                    {showPass ? (
                      <AiFillEyeInvisible className="text-neutral-content" />
                    ) : (
                      <AiFillEye className="text-neutral-content" />
                    )}
                  </span>
                </div>
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full rounded-full bg-primary text-base-100"
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
}
