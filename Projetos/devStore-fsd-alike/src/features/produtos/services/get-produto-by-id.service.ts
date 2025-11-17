import { HttpService } from "@/shared/lib/http";
import type { GetProdutosResponse } from "@/features/produtos/types/produtos";

export class GetProdutoByIdService extends HttpService {
  execute = async (produtoId: string) => {
    return this.http.get<GetProdutosResponse>(`/api/produto/${produtoId}`);
  };
}
