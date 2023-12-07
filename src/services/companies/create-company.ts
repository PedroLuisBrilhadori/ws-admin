import { Company, CreateCompany } from "@/models";
import { BaseServiceOptions, baseUrl } from "../api";

export class createCompanyOptions extends BaseServiceOptions {
  dto: CreateCompany;
}

export const createCompany = async ({
  headers,
  dto,
}: createCompanyOptions): Promise<Company> => {
  const body = JSON.stringify(dto);

  const response = await fetch(`${baseUrl}/companies`, {
    method: "POST",
    headers,
    body,
  });

  if (response.status !== 201) {
    throw new Error("Error ao criar empresa");
  }

  return response.json();
};
