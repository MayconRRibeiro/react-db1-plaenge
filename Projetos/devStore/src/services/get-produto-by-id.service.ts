import { HttpService } from "@/lib/http";
import type { GetProdutosResponse } from "@/types/produtos";

export class GetProdutoByIdService extends HttpService {
  execute = async (produtoId: string) => {
    return this.http.get<GetProdutosResponse>(`/api/produto/${produtoId}`);
  };
}
