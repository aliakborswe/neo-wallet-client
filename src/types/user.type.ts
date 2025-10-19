import type { TRole } from ".";


export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: TRole;
}