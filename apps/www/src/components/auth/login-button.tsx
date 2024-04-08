"use client";

import React from 'react';
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  mode?: "modal" | "redirect"
  asChild?: boolean
  children: React.ReactNode
}

export function LoginButton({
  mode = "redirect",
  asChild,
  children,
}: LoginButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/login");
  }

  if (mode === "modal") {
    return (
      <span>
        TODO: implement modal
      </span>
    );
  }
  else {
    return (
      <span className="cursor-pointer" onClick={handleClick}>
        {children}
      </span>
    );
  }
}
