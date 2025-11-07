import { HttpService } from "@/lib/http";
import type { GetProdutosResponse } from "@/types/produtos";

export class GetProdutosService extends HttpService {
  execute = async () => {
    return this.http.get<GetProdutosResponse>("/api/produtos");
  };
}
