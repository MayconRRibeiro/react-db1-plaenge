import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Heart, SearchIcon, ShoppingCart, Store, User } from "lucide-react";
import { AdminBanner } from "./adminBanner";

function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Store className="size-8" />
            <span className="text-xl font-semibold">DevStore</span>
          </div>
          <InputGroup className="max-w-xl">
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
    </div>
  );
}

export default Home;
