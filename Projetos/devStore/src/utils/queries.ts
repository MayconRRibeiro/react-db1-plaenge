export const produtoKeys = {
  produto: ["produto"],
  produtoId: (produtoId: string) => [...produtoKeys.produto, produtoId],
  criarProduto: () => [...produtoKeys.produto, "post"],
};
