import "./styles.css";

/*
Desafio React useEffect - Informações de Países

Descrição:
Neste desafio, você sincronizará o resultado de buscar dados de país de uma API externa 
com o estado do seu componente.

O JSX está finalizado, então tudo que você precisa fazer é buscar os dados da seguinte URL 
e atualizar o estado do componente com o resultado.

const url = `https://restcountries.com/v2/alpha/${countryCode}`;
Você atualizará data com a resposta JSON exata retornada da URL fornecida.

Tarefas:
- [ ] Exibir um estado de carregamento quando estiver buscando dados
- [ ] Buscar novos dados baseado na entrada do usuário
- [ ] Renderizar uma mensagem de erro se a busca falhar
*/

export default function CountryInfo() {
  const countryCode = "AU";
  const data = null;
  const isLoading = true;
  const error = null;

  const handleChange = (e) => {};

  return (
    <section>
      <header>
        <h1>Informações do País:</h1>

        <label htmlFor="country">Selecione um país:</label>
        <div>
          <select id="country" value={countryCode} onChange={handleChange}>
            <option value="AU">Austrália</option>
            <option value="CA">Canadá</option>
            <option value="CN">China</option>
            <option value="FR">França</option>
            <option value="DE">Alemanha</option>
            <option value="IN">Índia</option>
            <option value="JP">Japão</option>
            <option value="MX">México</option>
            <option value="GB">Reino Unido</option>
            <option value="US">Estados Unidos</option>
            <option value="INVALID">País Invalido</option>
          </select>
          {isLoading && <span>Carregando...</span>}
          {error && <span>{error.message}</span>}
        </div>
      </header>

      {data && (
        <article>
          <h2>{data.name}</h2>
          <table>
            <thead>
              <tr>
                <th>Propriedade</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Capital:</td>
                <td>{data.capital}</td>
              </tr>
              <tr>
                <td>Região:</td>
                <td>{data.region}</td>
              </tr>
              <tr>
                <td>População:</td>
                <td>{data.population}</td>
              </tr>
              <tr>
                <td>Área:</td>
                <td>{data.area}</td>
              </tr>
            </tbody>
          </table>
        </article>
      )}
    </section>
  );
}
