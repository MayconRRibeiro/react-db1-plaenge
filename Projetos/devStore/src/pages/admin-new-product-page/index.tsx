import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input, InputField } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectField } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PostProdutoService } from "@/services/post-produto.service";
import type { CreateProdutoRequest } from "@/types/produtos";
import { CategoriaEnum } from "@/types/produtos.enums";
import { CATEGORIA_OPTIONS } from "@/utils/constants";
import { produtoKeys } from "@/utils/queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, Plus, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import z from "zod";

const AdminNewProductSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  categoria: z.enum(CategoriaEnum),
  preco: z.string(),
  estoque: z.string(),
  descricao: z.string(),
});

export const AdminNewProductPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const form = useForm({
    defaultValues: {
      nome: "",
      categoria: CategoriaEnum.Acessorios,
      preco: "",
      estoque: "",
      descricao: "",
    },
    resolver: zodResolver(AdminNewProductSchema),
  });
  const [features, setFeatures] = useState<string[]>([]);
  const [currentFeature, setCurrentFeature] = useState("");

  const createProdutoMutation = useMutation({
    mutationFn: async (data: CreateProdutoRequest) => {
      return new PostProdutoService().execute(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: produtoKeys.produtos });
      navigate("/products");
    },
    onError: (error) => {
      console.error("Erro ao criar produto:", error);
    },
  });

  const handleAddFeature = () => {
    if (currentFeature.trim()) {
      setFeatures((prev) => [...prev, currentFeature.trim()]);
      setCurrentFeature("");
    }
  };

  const handleRemoveFeature = (index: number) => {
    setFeatures((prev) => prev.filter((_, i) => i !== index));
  };

  const handleBack = () => {
    navigate("/products");
  };

  const onSubmit = (data: z.infer<typeof AdminNewProductSchema>) => {
    const productData: CreateProdutoRequest = {
      nome: data.nome,
      categoria: data.categoria,
      preco: parseFloat(data.preco),
      estoque: parseInt(data.estoque, 10),
      descricao: data.descricao,
      caracteristicas: features.length > 0 ? features : undefined,
    };

    createProdutoMutation.mutate(productData);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h3 className="text-lg">Novo Produto</h3>
          <p className="text-sm text-gray-600">
            Adicione um novo produto ao catálogo
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <InputField
                  control={form.control}
                  name="nome"
                  label="Nome do Produto *"
                  placeholder="Ex: Notebook Dell XPS 13"
                />

                <div className="grid grid-cols-2 gap-4 items-start">
                  <SelectField
                    control={form.control}
                    options={CATEGORIA_OPTIONS}
                    name="categoria"
                    label="Categoria *"
                    placeholder="Selecione uma categoria"
                  />

                  <InputField
                    control={form.control}
                    name="preco"
                    label="Preço (R$) *"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                  />
                </div>

                <InputField
                  control={form.control}
                  name="estoque"
                  label="Estoque *"
                  type="number"
                  placeholder="0"
                />

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Descrição <span className="text-red-500">*</span>
                  </Label>
                  {/* Pendente: TextAreaField */}
                  <Textarea
                    id="description"
                    placeholder="Descreva o produto em detalhes..."
                    rows={4}
                    {...form.register("descricao")}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Características do Produto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite uma característica e pressione Enter"
                    value={currentFeature}
                    onChange={(e) => setCurrentFeature(e.target.value)}
                  />
                  <Button type="button" onClick={handleAddFeature}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                {features.length > 0 && (
                  <div className="space-y-2">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                      >
                        <span className="text-sm">{feature}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleRemoveFeature(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={handleBack}>
                Cancelar
              </Button>
              <Button
                type="submit"
                className="bg-slate-950 hover:bg-slate-900"
                disabled={createProdutoMutation.isPending}
              >
                {createProdutoMutation.isPending
                  ? "Salvando..."
                  : "Salvar Produto"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
