import { GetProdutosService } from "@/services/get-produtos.service";
import { produtoKeys } from "@/utils/queries";
import { useQuery } from "@tanstack/react-query";

export const useQueryProdutos = () => {
  return useQuery({
    queryKey: produtoKeys.produto,
    queryFn: async () => {
      const response = await new GetProdutosService().execute();
      return response.data;
    },
  });
};
