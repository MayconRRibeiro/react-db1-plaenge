export const CategoriaEnum = {
  Eletronicos: "Eletronicos",
  Calcados: "Calcados",
  Acessorios: "Acessorios",
  Roupas: "Roupas",
} as const;

export type TCategoriaEnum = (typeof CategoriaEnum)[keyof typeof CategoriaEnum];
