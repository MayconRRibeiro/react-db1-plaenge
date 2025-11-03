import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthContext } from "@/context/auth.context";
import { ShieldCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const { state } = useLocation();

  const handleClick = () => {
    login().then(() => {
      navigate(state?.path ?? "/dashboard");
    });
  };

  return (
    <div className="min-h-svh flex items-center justify-center bg-linear-to-b from-gray-950 to-blue-800 ">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="size-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <ShieldCheck className="text-white" />
            </div>
          </div>
          <CardTitle className="text-center">Painel Administrativo</CardTitle>
          <CardDescription className="text-center">
            Entre com suas credenciais para acessar o sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu E-mail"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" onClick={handleClick}>
            Entrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
