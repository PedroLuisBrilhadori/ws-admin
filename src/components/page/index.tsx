import { Toolbar } from "../toolbar";

export type PageProps = {
  title?: string;
  children: React.ReactNode;
};

export const Page = ({ title, children }: PageProps) => {
  const PageTitle = () => {
    return <h1 className="text-xl font-bold m-5">{title}</h1>;
  };

  return (
    <div className="flex flex-col">
      <Toolbar />

      {title && <PageTitle />}

      {children}
    </div>
  );
};
