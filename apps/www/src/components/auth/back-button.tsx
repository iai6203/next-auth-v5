"use client";

import React from 'react';

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string
  href: string
}

export function BackButton({
  label,
  href,
}: BackButtonProps) {
  return (
    <Button variant="link" size="sm" asChild className="font-normal w-full">
      <Link href={href}>
        {label}
      </Link>
    </Button>
  );
}
