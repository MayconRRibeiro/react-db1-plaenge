import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router";

export const WishListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-8 ">
        <h1 className="mb-8">Lista de Desejos</h1>
        <div className="bg-white flex flex-col items-center border pb-6 gap-2 pt-12  rounded-lg">
          <Heart className="size-16 text-muted-foreground mb-2" />
          <p>Sua lista de desejos está vazia</p>
          <span className="mb-4 text-muted-foreground">
            Adicione produtos que você gosta para não esquecê-los
          </span>
          <Button onClick={() => navigate("/")}>Explorar Produtos</Button>
        </div>
      </div>
    </div>
  );
};
