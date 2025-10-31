import { Button } from "@/components/ui/button";
import { Shirt, ShoppingBag, Smartphone, Watch } from "lucide-react";
import { AdminBanner } from "./adminBanner";
import { CardCategoria } from "@/components/card-categoria";

function HomePage() {
  return (
    <>
      {import.meta.env.DEVSTORE_ADMIN === "admin" ? <AdminBanner /> : null}

      <section className="bg-linear-to-r from-gray-950 to-gray-950/80 py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl text-white mb-4">Bem-vindo à DevStore</h1>
          <p className="text-xl font-thin text-white mb-6 max-w-2xl">
            Os melhores produtos com os melhores preços. Entrega rápida e segura
            para todo o Brasil.
          </p>
          <Button variant="secondary">Ver Produtos</Button>
        </div>
      </section>

      <section className="w-full px-12 py-12">
        <h2 className="text-3xl text-center mb-8 text-gray-900">Categorias</h2>
        <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto">
          <CardCategoria icon={Smartphone} title="Eletrônicos" />
          <CardCategoria icon={ShoppingBag} title="Calçados" />
          <CardCategoria icon={Watch} title="Relógios" />
          <CardCategoria icon={Shirt} title="Roupas" />
        </div>
      </section>

      <footer className="w-full bg-gray-100 py-12 px-12 text-center">
        <h2 className="mb-4 text-3xl text-gray-900">Frete Grátis</h2>
        <p className="text-gray-600 mb-6">
          Em compras acima de R$ 200,00 para todo o Brasil
        </p>
        <Button className="text-white px-6 py-2 rounded-lg text-sm">
          Comprar Agora
        </Button>
      </footer>
    </>
  );
}

export default HomePage;
