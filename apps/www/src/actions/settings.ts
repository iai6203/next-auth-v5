"use server";

import bcrypt from "bcrypt";
import { z } from "zod";

import { db } from "@/lib/db";
import { getUserById, getUserByEmail } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";
import { SettingsSchema } from "@/schemas";

export const settings = async (
  values: z.infer<typeof SettingsSchema>,
) => {
  const user = await currentUser();

  if (!user) {
    return { error: "권한 없음" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "권한 없음" };
  }

  // OAuth 계정은 아래의 정보들이 수정되지 않도록 하기 위함
  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email);

    if (existingUser && existingUser.id !== user.id) {
      return { error: "해당 이메일은 이미 사용 중입니다." };
    }

    const verificationToken = await generateVerificationToken(values.email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );

    return { success: "인증 메일이 발송되었습니다." };
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordMatch = await bcrypt.compare(values.password, dbUser.password);

    if (!passwordMatch) {
      return { error: "비밀번호가 잘못되었습니다." };
    }

    const hashedPassword = await bcrypt.hash(values.newPassword, 10);
    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  });

  return { success: "프로필 정보가 수정되었습니다." };
};
