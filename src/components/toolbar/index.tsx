import { useReturn } from "@/hooks/toolbar/use-return";
import { ArrowLeft } from "lucide-react";

export const Toolbar = () => {
  const { back } = useReturn();

  return (
    <div className="flex items-center px-2 w-full h-16 bg-primary-foreground">
      {back !== "" && (
        <a href={back}>
          <ArrowLeft />
        </a>
      )}
    </div>
  );
};
