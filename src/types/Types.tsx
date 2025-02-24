import { z } from "zod";
export interface TChildrenProps {
  children: React.ReactNode;
  Class?: string;
}

export type TName = {
  name: string;
};

export const signupSchema = z
  .object({
    name: z.string().min(2, "Please insert your name"),
    email: z.string().email().min(5, "pleaase insert your email"),
    password: z.string().min(8, "password must be 8 characters"),
    confirmPassword: z.string(),
    phone: z.string().min(1, "Please insert your phone number"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "confirm password is not same",
    path: ["confirmPassword"],
  });
export type TsignupSchema = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  email: z.string().email().min(5, "pleaase insert your email"),
  password: z.string().min(8, "password must be 8 characters"),
});

export type TsigninSchema = z.infer<typeof loginSchema>;

export type TuserStore = {
  user: object | null;
  signup_user: (TuserSignUp: any) => Promise<void>;
  loginUser: (TuserLogin: any) => Promise<any>;
  logOutUser: () => void;
};

export interface RoadmapProps {
  name: string;
  profileImage?: string;
  issueTitle: string;
  issueDescription?: string;
  tags: string[];
  status: "investigating" | "in-progress" | "resolved";
}
