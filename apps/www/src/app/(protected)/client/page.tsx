"use client";

import React from 'react';

import { UserInfo } from "@/components/auth/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

export default function ClientPage() {
  const user = useCurrentUser();

  return (
    <UserInfo
      user={user}
      label="📱 Client component"
    />
  );
}
