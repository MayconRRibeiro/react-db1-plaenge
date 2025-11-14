export const produtoKeys = {
  produtos: ["produtos"],
  produtoId: (produtoId: string) => [...produtoKeys.produtos, produtoId],
  criarProduto: () => [...produtoKeys.produtos, "post"],
};
