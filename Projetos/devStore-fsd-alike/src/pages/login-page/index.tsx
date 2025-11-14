import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputField } from "@/components/ui/input";
import { useAuthContext } from "@/context/auth.context";
import { ShieldCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  name: z.string(),
  email: z.email("e-mail inválido"),
});

export const LoginPage = () => {
  const form = useForm({
    defaultValues: { name: "", email: "" },
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const { login } = useAuthContext();
  const { state } = useLocation();

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    login({ name: data.name, email: data.email, isAdmin: true }).then(() => {
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
          <Form {...form}>
            <form
              className="flex flex-col gap-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <InputField
                control={form.control}
                name="name"
                label="Nome"
                placeholder="Digite seu nome"
              />
              <InputField
                control={form.control}
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
              />
              <Button type="submit">Entrar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
