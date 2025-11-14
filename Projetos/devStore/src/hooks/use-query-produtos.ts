import { GetProdutosService } from "@/services/get-produtos.service";
import { produtoKeys } from "@/utils/queries";
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
