import { HttpService } from "@/lib/http";

export class GetProdutosService extends HttpService {
  execute = async () => {
    return this.http.get("/api/produtos");
  };
}
