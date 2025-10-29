import { Button } from "@/components/ui/button";
import { Lock, Shield } from "lucide-react";

export const AdminBanner = () => (
  <div className="w-full h-23 bg-linear-to-r from-blue-600 to-blue-800 px-12 py-4">
    <div className="flex items-center justify-center gap-4 mb-2">
      <Shield className="text-white size-6" />
      <p className="text-white">Acesse o Painel Administrativo completo</p>
      <Button variant="secondary" size="sm">
        <Lock />
        Fazer Login como Admin
      </Button>
    </div>
    <p className="text-center text-white text-sm">
      Use: admin@devstore.com / admin
    </p>
  </div>
);
