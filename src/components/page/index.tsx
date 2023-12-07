import { Toolbar } from "../toolbar";

export type PageProps = {
  title?: string;

  action?: React.ReactNode;
  children: React.ReactNode;
  back?: string;
};

export const Page = ({ title, children, back, action }: PageProps) => {
  const PageTitle = () => {
    return (
      <div className="flex justify-between items-center m-5">
        <h1 className="text-xl font-bold ">{title}</h1>
        {action && action}
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <Toolbar back={back} />

      {title && <PageTitle />}

      {children}
    </div>
  );
};
