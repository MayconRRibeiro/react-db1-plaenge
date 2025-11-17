import { PostProdutoService } from "@/features/produtos/services/post-produto.service";
import type { CreateProdutoRequest } from "@/features/produtos/types/produtos";
import { produtoKeys } from "@/features/produtos/utils/queries";
import { useMutation } from "@tanstack/react-query";

export const useCriarProduto = () => {
  return useMutation({
    mutationKey: produtoKeys.criarProduto(),
    mutationFn: async (data: CreateProdutoRequest) => {
      const response = await new PostProdutoService().execute(data);
      return response.data;
    },
  });
};
