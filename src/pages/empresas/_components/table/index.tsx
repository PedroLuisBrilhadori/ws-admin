import { DataTable } from "@/components/table";
import { columns } from "./column";
import { useSelector } from "react-redux";
import { selectCompanies } from "@/store/companies";

export const CompaniesTable = () => {
  const companies = useSelector(selectCompanies);

  return (
    <DataTable
      data={companies}
      columns={columns(true)}
      paginator={true}
    ></DataTable>
  );
};
