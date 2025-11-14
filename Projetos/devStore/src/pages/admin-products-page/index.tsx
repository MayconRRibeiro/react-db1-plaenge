import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Suspense } from "react";
import { useNavigate } from "react-router";
import { AdminProductsContent } from "./admin-products-content";
import { AdminProductsPageSkeleton } from "./admin-products-page.skeleton";

export const AdminProductsPage = () => {
  const navigate = useNavigate();

  const handleNewProduct = () => {
    navigate("/create-product");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg">Gestão de Produtos</h3>
          <p className="text-sm text-gray-600">
            Gerencie o catálogo de produtos da loja
          </p>
        </div>
        <Button
          className="bg-slate-950 hover:bg-slate-900"
          onClick={handleNewProduct}
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Produto
        </Button>
      </div>

      <Card>
        <Suspense fallback={<AdminProductsPageSkeleton />}>
          <AdminProductsContent />
        </Suspense>
      </Card>
    </div>
  );
};
