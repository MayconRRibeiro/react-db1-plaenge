import { GetProdutosService } from "@/services/get-produtos.service";
import { useQuery } from "@tanstack/react-query";

export const useQueryProdutos = () => {
  return useQuery({
    queryKey: ["produtos"],
    queryFn: async () => {
      const response = await new GetProdutosService().execute();
      return response.data;
    },
  });
};
