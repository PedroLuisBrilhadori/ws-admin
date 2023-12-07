import { useToast } from "@/components/ui/use-toast";
import { useUserHeaders } from "@/hooks";
import { FindCompanies } from "@/services/companies";
import { selectCompanies, setCompanies } from "@/store/companies";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCompanies = () => {
  const companies = useSelector(selectCompanies);
  const { headers, user } = useUserHeaders();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (user.id) {
      setLoading(true);
      FindCompanies({ headers })
        .then((companies) => {
          dispatch(setCompanies(companies));
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);

          toast({
            title: "Erro",
            description: error.message,
            variant: "destructive",
          });
        });
    }
  }, [user.id]);

  return { companies, loading, error };
};
