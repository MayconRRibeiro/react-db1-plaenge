import { Card, CardContent } from "@/shared/ui/card";
import type { LucideIcon } from "lucide-react";

interface CardCategoriaProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
}

export function CardCategoria({
  icon: Icon,
  title,
  onClick,
}: CardCategoriaProps) {
  return (
    <Card
      className="hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="p-8 text-center flex flex-1 flex-col items-center">
        <Icon className="h-12 w-12 mx-auto mb-4 text-gray-900" />
        <p className="text-gray-900">{title}</p>
      </CardContent>
    </Card>
  );
}
