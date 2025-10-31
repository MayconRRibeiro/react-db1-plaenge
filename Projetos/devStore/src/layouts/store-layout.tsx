import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Heart, SearchIcon, ShoppingCart, Store, User } from "lucide-react";
import { Outlet, useNavigate } from "react-router";

export const StoreLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-svh">
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
            <Button
              size="icon"
              variant="ghost"
              onClick={() => navigate("/wish-list")}
            >
              <Heart className="size-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCart className="size-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <User className="size-4" />
            </Button>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
