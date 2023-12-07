import { MenuCards } from "@/components/menu-cards";
import { Toolbar } from "@/components/toolbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Toolbar />

      <div className="m-10">
        <MenuCards
          title="Empresas"
          path="/empresas"
          description="Vizualizar, Criar novas empresas para o sistema"
        />
      </div>
    </div>
  );
}
