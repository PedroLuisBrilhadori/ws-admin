import { ArrowUpRight } from "lucide-react";

type MenuCardsProps = {
  title: string;
  description?: string;
  path: string;
};

export const MenuCards = ({ title, description, path }: MenuCardsProps) => {
  return (
    <div className="flex flex-col justify-center border-2 border-primary p-4">
      <div className="flex justify-between items-center mb-3 w-full">
        <h1 className="text-lg font-bold">{title}</h1>

        <a href={path} className="cursor-pointer">
          <ArrowUpRight />
        </a>
      </div>

      {description && <p>{description}</p>}
    </div>
  );
};
