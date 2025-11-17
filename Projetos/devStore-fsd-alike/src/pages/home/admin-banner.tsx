import { Button } from "@/shared/ui/button";
import { Lock, Shield } from "lucide-react";
import { useNavigate } from "react-router";

export const AdminBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-23 bg-linear-to-r from-blue-600 to-blue-800 px-12 py-4">
      <div className="flex items-center justify-center gap-4 mb-2">
        <Shield className="text-white size-6" />
        <p className="text-white">Acesse o Painel Administrativo completo</p>
        <Button variant="secondary" size="sm" onClick={() => navigate("login")}>
          <Lock />
          Fazer Login como Admin
        </Button>
      </div>
      <p className="text-center text-white text-sm">
        Use: admin@devstore.com / admin
      </p>
    </div>
  );
};
