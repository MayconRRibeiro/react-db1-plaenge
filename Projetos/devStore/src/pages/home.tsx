import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Heart, SearchIcon, ShoppingCart, Store, User } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
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
    </div>
  );
}

export default Home;
