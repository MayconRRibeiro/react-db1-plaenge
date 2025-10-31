import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";

export const CartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-8">
        <h1 className="mb-8">Carrinho de Compras</h1>
        <div className="bg-white flex flex-col items-center border pb-6 gap-2 pt-12 rounded-lg">
          <ShoppingBag className="size-16 text-muted-foreground mb-2" />
          <p>Seu carrinho está vazio</p>
          <span className="mb-4 text-muted-foreground">
            Adicione produtos para começar suas compras
          </span>
          <Button onClick={() => navigate("/")}>Continuar Comprando</Button>
        </div>
      </div>
    </div>
  );
};
