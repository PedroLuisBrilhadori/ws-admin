import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useUserHeaders } from "@/hooks";
import { CreateCompany } from "@/models";
import { createCompany } from "@/services/companies";
import { addCompany } from "@/store/companies";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialValue: CreateCompany = {
  name: "",
  cnpj: "",
  user: {
    name: "",
    email: "",
  },
};

export const CreateCompanyForm = () => {
  const defaultValues = initialValue;
  const { headers } = useUserHeaders();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<CreateCompany>({
    defaultValues,
  });

  const onSubmit = (data: CreateCompany) => {
    createCompany({ dto: data, headers })
      .then((company) => {
        dispatch(addCompany(company));

        toast({
          title: "Empresa criada com sucesso",
          description: `A empresa ${company.name} foi criada com sucesso`,
          variant: "default",
        });

        navigate("/empresas");
      })
      .catch((error) => {
        toast({
          title: "Erro ao criar empresa",
          description: error?.message,
          variant: "destructive",
        });
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3 justify-center"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Fantasia</FormLabel>
              <FormControl>
                <Input
                  className="bg-primary-foreground"
                  placeholder="Ex. Pentare"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cnpj"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CNPJ</FormLabel>
              <FormControl>
                <Input
                  className="bg-primary-foreground"
                  placeholder="XX.XXX.XXX/0001-XX"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="user.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Usuário</FormLabel>
              <FormControl>
                <Input
                  className="bg-primary-foreground"
                  placeholder="Ex. Carlos"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Nome do usuário que utilizará a conta da empresa no sistema.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="user.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-primary-foreground"
                  placeholder="example@example.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                O email será usado para fazer login no sistema.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="self-center w-24"> Criar </Button>
      </form>
    </Form>
  );
};
