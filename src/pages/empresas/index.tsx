import { Page } from "@/components/page";
import { useCompanies } from "@/hooks/company";
import { CompaniesTable } from "./_components";

const CompanyHome = () => {
  const { companies, loading } = useCompanies();

  if (loading) return <div>Loading...</div>;

  console.log(companies);

  return (
    <Page title="Empresas">
      <div className=" m-5">
        <CompaniesTable />
      </div>
    </Page>
  );
};

export default CompanyHome;
