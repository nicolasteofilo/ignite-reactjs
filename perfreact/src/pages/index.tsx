import type { NextPage } from "next";
import { FormEvent, useCallback, useState } from "react";
import { SearchResult } from "../components/SearchResult";

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setResults(data);
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">Buscar</button>
      </form>

      <SearchResult results={results} addToWishList={addToWishList} />
    </div>
  );
};

export default Home;

/**
 o useCallback server para memorizar uma função, já o useMemo server para memorizar um resultado, um valor e não uma função.

 toda vez que esse compoente atualiza a nossa função addToWishList ele é recriada do zero, ocupando um novo espaço na mémoria, como a função tá sendo repaasada, é importade que usamos o useCallback

 e o useCallback tem o mesmo array de dependencio do useEffect que usamos bastante no ReactJS
*/
