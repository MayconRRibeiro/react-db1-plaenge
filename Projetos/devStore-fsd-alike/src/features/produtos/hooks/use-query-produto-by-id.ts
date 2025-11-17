import { GetProdutoByIdService } from "@/features/produtos/services/get-produto-by-id.service";
import { produtoKeys } from "@/features/produtos/utils/queries";
import { useQuery } from "@tanstack/react-query";

export const useQueryProdutoById = (produtoId: string) => {
  return useQuery({
    queryKey: produtoKeys.produtoId(produtoId),
    queryFn: async () => {
      const response = await new GetProdutoByIdService().execute(produtoId);
      return response.data;
    },
  });
};
