import { useCompanies } from "@/hooks/company";

const CompanyHome = () => {
  const { companies, loading } = useCompanies();

  if (loading) return <div>Loading...</div>;

  console.log(companies);

  return (
    <div>
      <h1>Company Home</h1>
    </div>
  );
};

export default CompanyHome;
