import { GetProdutosService } from "@/features/produtos/services/get-produtos.service";
import { produtoKeys } from "@/features/produtos/utils/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useQueryProdutos = () => {
  return useSuspenseQuery({
    queryKey: produtoKeys.produtos,
    queryFn: async () => {
      const response = await new GetProdutosService().execute();
      return response.data;
    },
  });
};
