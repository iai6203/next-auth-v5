"use client";

import React from 'react';
import { UserRole } from "@prisma/client";

import { FormError } from "@/components/form/form-error";
import { useCurrentRole } from "@/hooks/use-current-role";

interface RoleGateProps {
  allowedRole: UserRole
  children: React.ReactNode;
}

export function RoleGate({
  allowedRole,
  children,
}: RoleGateProps) {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="당신은 해당 컨텐츠를 이용할 권한이 없습니다." />
    )
  }

  return (
    <>
      {children}
    </>
  );
}
