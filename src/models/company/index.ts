import { CreateUser, User } from "../user";

export type Company = {
  id: string;
  name: string;
  cnpj: string;
  user?: User;
};

export type CreateCompany = {
  name: string;
  cnpj: string;
  user: CreateUser;
};
