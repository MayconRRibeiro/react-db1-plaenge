interface Produto {
  id: string;
  nome: string;
  categoria: string;
  preco: number;
  estoque: number;
  descricao: string;
  caracteristicas: string[];
  imagem: string;
}

export type GetProdutosResponse = Produto[];
