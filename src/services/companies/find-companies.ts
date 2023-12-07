import { Company } from "@/models";
import { BaseServiceOptions, baseUrl } from "..";

export const FindCompanies = async ({
  headers,
}: BaseServiceOptions): Promise<Company[]> => {
  const response = await fetch(`${baseUrl}/companies`, {
    headers,
  });

  if (response.status !== 200) {
    throw new Error("Error ao carregar empresas");
  }

  return response.json();
};
