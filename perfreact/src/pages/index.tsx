import type { NextPage } from "next";
import { FormEvent, useCallback, useState } from "react";
import { SearchResult } from "../components/SearchResult";

type Product = {
  id: number;
  price: number;
  priceFormatted: string;
  title: string;
};

interface Results {
  totalPrice: number;
  list: Product[];
}

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Results>();

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const products = data.map((product: Product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price),
      };
    });

    const totalPrice = data.reduce((acc: number, product: Product) => {
      return acc + product.price;
    }, 0);

    setResults({
      list: products,
      totalPrice,
    });
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

      <SearchResult
        addToWishList={addToWishList}
        results={results?.list || []}
        totalPrice={Number(results?.totalPrice)}
      />
    </div>
  );
};

export default Home;
