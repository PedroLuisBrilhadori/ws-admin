import { Page } from "@/components/page";
import { useCompanies } from "@/hooks/company";
import { CompaniesTable } from "./_components";
import { Button } from "@/components/ui/button";

const CompanyHome = () => {
  const { companies, loading } = useCompanies();

  if (loading) return <div>Loading...</div>;

  const CreateCompany = () => {
    return (
      <a href="/empresas/criar">
        <Button>Criar empresa</Button>
      </a>
    );
  };

  return (
    <Page back="/" title="Empresas" action={<CreateCompany />}>
      <div>
        <CompaniesTable />
      </div>
    </Page>
  );
};

export default CompanyHome;
