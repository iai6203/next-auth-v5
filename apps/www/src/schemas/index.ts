import { z } from "zod";
import { UserRole } from "@prisma/client";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const SettingsSchema = z.object({
  email: z.optional(z.string().email()),
  name: z.optional(z.string()),
  role: z.enum([
    UserRole.ADMIN,
    UserRole.USER,
  ]),
  isTwoFactorEnabled: z.boolean().optional(),
  password: z.preprocess((value) => {
    if (!value || typeof value !== "string") {
      return undefined;
    }

    if (value === "") {
      return undefined;
    }

    return value;
  }, z.string().min(6).optional()),
  newPassword: z.preprocess((value) => {
    if (!value || typeof value !== "string") {
      return undefined;
    }

    if (value === "") {
      return undefined;
    }

    return value;
  }, z.string().min(6).optional()),
})
  .refine((data) => {
    if (data.newPassword && !data.password) {
      return false;
    }

    return true;
  }, {
    path: ["password"],
    message: "비밀번호는 필수 사항입니다.",
  })
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false;
    }

    return true;
  }, {
    path: ["newPassword"],
    message: "새로운 비밀번호는 필수 사항입니다.",
  });
