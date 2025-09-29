import { useState } from "react";
import "./styles.css";

/*
Desafio React useEffect - Busca no Hacker News

Descrição:
Neste desafio, buscaremos dados da API do Hacker News. Diferente dos outros desafios de effects, 
o estado e manipuladores de eventos para este não precisam de atualizações. 
Em vez disso, dada a função fetchData, você precisará sincronizar seu componente com a API do Hacker News 
e então atualizar o JSX apropriadamente.

Este é complicado, então tome seu tempo e pense bem. 
Em qualquer lugar no JSX que você veja null ou TODO, você precisará atualizá-lo.

Tarefas:
- [ ] Buscar dados baseado na consulta de pesquisa
- [ ] Exibir o estado de carregamento enquanto busca
- [ ] Buscar novos resultados quando o filtro de tag mudar
- [ ] Permitir que o usuário navegue para as próximas e anteriores páginas
- [ ] Desabilitar os botões Próximo e Anterior baseado no número de páginas
- [ ] Exibir os resultados em uma lista numerada, com cada página mostrando a posição correta de cada post
*/

const fetchData = async ({ query = "", page = 0, tag = "" }) => {
  return fetch(
    `https://hn.algolia.com/api/v1/search?query=${query}&tags=${encodeURIComponent(
      tag,
    )}&page=${page}`,
  )
    .then((response) => response.json())
    .then((json) => ({
      results: json.hits || [],
      pages: json.nbPages || 0,
      resultsPerPage: json.hitsPerPage || 20,
    }));
};

export default function BuscaHackerNews() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [tag, setTag] = useState("story");
  const [page, setPage] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(0);
  const [totalPages, setTotalPages] = useState(50);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(0);
  };

  const handleTag = (e) => {
    setTag(e.target.value);
    setPage(0);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <main>
      <h1>Hacker News</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="query">Pesquisar</label>
          <input
            type="text"
            id="query"
            name="query"
            value={query}
            onChange={handleSearch}
            placeholder="Pesquisar no Hacker News..."
          />
        </div>
        <div>
          <label htmlFor="tag">Categoria</label>
          <select id="tag" name="tag" onChange={handleTag} value={tag}>
            <option value="story">Story</option>
            <option value="ask_hn">Ask HN</option>
            <option value="show_hn">Show HN</option>
            <option value="poll">Poll</option>
          </select>
        </div>
      </form>
      <section>
        <header>
          <h2>
            <span>No Results OR Page TODO of TODO</span>
            <div
              className="spinner"
              style={{ display: loading ? "block" : "none" }}
            ></div>
          </h2>
          <div>
            <button className="link" onClick={null} disabled={null}>
              Anterior
            </button>
            <button className="link" onClick={null} disabled={null}>
              Próximo
            </button>
          </div>
        </header>
        <ul>
          {results.map(({ url, objectID, title }, index) => {
            const href =
              url || `https://news.ycombinator.com/item?id=${objectID}`;

            return (
              <li key={null}>
                <span>{null}.</span>
                <a href={href} target="_blank" rel="noreferrer">
                  TODO
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
