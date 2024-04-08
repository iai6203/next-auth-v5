import React from 'react';

import { UserInfo } from "@/components/auth/user-info";
import { currentUser } from "@/lib/auth";

export default async function ServerPage() {
  const user = await currentUser();

  return (
    <UserInfo
      user={user}
      label="💻 Server component"
    />
  );
}
