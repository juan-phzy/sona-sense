"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

interface RegisterModalProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegisterModal({ className, ...props }: RegisterModalProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Form submission logic goes here
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={className} {...props}>
      {/* Modal Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        {/* Modal Content */}
        <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
          {/* Registration Text */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold">
              Sign up to start using SonaSense!
            </h3>
          </div>

          <form onSubmit={onSubmit} className="grid gap-4">
            {/* Name Field */}
            <Input
              id="name"
              placeholder="Name"
              type="text"
              disabled={isLoading}
              className="w-full"
            />

            {/* Email Field */}
            <Input
              id="email"
              placeholder="Email"
              type="email"
              disabled={isLoading}
              className="w-full"
            />

            {/* Username Field */}
            <Input
              id="username"
              placeholder="Username"
              type="text"
              disabled={isLoading}
              className="w-full"
            />

            {/* Password Field */}
            <Input
              id="password"
              placeholder="Password"
              type="password"
              disabled={isLoading}
              className="w-full"
            />

            {/* Confirm Password Field */}
            <Input
              id="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              disabled={isLoading}
              className="w-full"
            />

            {/* Submit Button */}
            <Button disabled={isLoading} className="w-full flex justify-center">
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
