export interface TChildrenProps {
  children: React.ReactNode;
  Class?: string;
}

export type TName = {
  name: string;
};
export type UserSignUp = {
  name: string;
  email: string;
  phone: number;
  password: string;
  confirm: string;
};
export type UserLogin = {
  email: string;
  password: string;
};
