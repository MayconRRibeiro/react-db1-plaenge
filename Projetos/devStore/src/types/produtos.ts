interface ProdutoLite {
  id: string;
  nome: string;
  categoria: string;
  preco: number;
  estoque: number;
}

interface Produto extends ProdutoLite {
  descricao: string;
  caracteristicas: string[];
  imagem: string;
}

export type GetProdutosResponse = ProdutoLite[];
export type GetProdutoByIdResponse = Produto;

export type CreateProdutoRequest = Omit<ProdutoLite, "id"> & {
  descricao: string;
  caracteristicas?: string[];
  imagem?: string;
};
export type CreateProdutoResponse = Produto;
