import { PostProdutoService } from "@/services/post-produto.service";
import type { CreateProdutoRequest } from "@/types/produtos";
import { produtoKeys } from "@/utils/queries";
import { useMutation } from "@tanstack/react-query";

export const useMutationProduto = (data: CreateProdutoRequest) => {
  return useMutation({
    mutationKey: produtoKeys.criarProduto(),
    mutationFn: async () => {
      const response = await new PostProdutoService().execute(data);
      return response.data;
    },
  });
};
