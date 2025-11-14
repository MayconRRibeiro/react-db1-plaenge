import { HttpService } from "@/lib/http";
import type {
  CreateProdutoRequest,
  CreateProdutoResponse,
} from "@/types/produtos";

export class PostProdutoService extends HttpService {
  execute = async (data: CreateProdutoRequest) => {
    return this.http.post<CreateProdutoResponse>("/api/produto", data);
  };
}
