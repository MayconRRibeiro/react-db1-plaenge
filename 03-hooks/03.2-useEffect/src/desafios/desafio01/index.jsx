import { useEffect, useState } from "react";
import "./styles.css";

/*
Desafio React useEffect - Refatoração de Filtro de Busca

Descrição:
Neste desafio, você tem um app que usa useEffect para reagir a mudanças no termo de busca. 
Isso não é ideal – useEffect deve ser usado para sincronização, não para reagir a mudanças em valores. 
Refatore o app para eliminar o useEffect, mas mantenha a mesma funcionalidade.

Tarefas:
- [ ] Renderizar a lista de itens
- [ ] Filtrar a lista de itens baseado no termo de busca
- [ ] Não usar useEffect
*/

const items = [
  "Maçã",
  "Banana",
  "Cereja",
  "Tâmara",
  "Figo",
  "Uva",
  "Melão",
  "Limão",
  "Manga",
  "Nectarina",
  "Laranja",
  "Mamão",
  "Framboesa",
  "Morango",
  "Melancia",
];

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const result = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredItems(result);
  }, [searchTerm]);

  return (
    <div className="container">
      <h1>Filtro de Busca</h1>
      <input
        type="text"
        placeholder="Digite para buscar frutas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="items-list">
        {filteredItems.map((item) => (
          <li key={item} className="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
