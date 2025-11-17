import { HttpService } from "@/shared/lib/http";
import type {
  CreateProdutoRequest,
  CreateProdutoResponse,
} from "@/features/produtos/types/produtos";

export class PostProdutoService extends HttpService {
  execute = async (data: CreateProdutoRequest) => {
    return this.http.post<CreateProdutoResponse>("/api/produto", data);
  };
}
