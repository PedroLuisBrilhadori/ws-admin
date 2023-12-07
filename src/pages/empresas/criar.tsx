import { Page } from "@/components/page";
import { CreateCompanyForm } from "./_components/form";

const CreateCompany = () => {
  return (
    <Page title="Criar empresa" back="/empresas">
      <div>
        <CreateCompanyForm />
      </div>
    </Page>
  );
};

export default CreateCompany;
