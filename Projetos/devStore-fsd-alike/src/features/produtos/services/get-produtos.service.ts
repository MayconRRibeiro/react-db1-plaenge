import { HttpService } from "@/shared/lib/http";
import type { GetProdutosResponse } from "@/features/produtos/types/produtos";

export class GetProdutosService extends HttpService {
  execute = async () => {
    return this.http.get<GetProdutosResponse>("/api/produtos");
  };
}
