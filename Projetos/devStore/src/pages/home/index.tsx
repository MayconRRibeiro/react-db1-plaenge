import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import {
  Heart,
  SearchIcon,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Store,
  User,
  Watch,
} from "lucide-react";
import { AdminBanner } from "./adminBanner";
import { CardCategoria } from "@/components/card-categoria";

function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Store className="size-8" />
            <span className="text-xl font-semibold">DevStore</span>
          </div>
          <InputGroup className="max-w-xl mx-4">
            <InputGroupInput placeholder="Buscar produtos..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <Heart className="size-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <ShoppingCart className="size-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <User className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <AdminBanner />

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
    </div>
  );
}

export default Home;
