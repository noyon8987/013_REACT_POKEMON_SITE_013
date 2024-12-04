import React, { useEffect, useState } from "react";
import PokemonData from "./PokemonData";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const api = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchApi = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();

      const detailPokemonData = data.results.map(async (curPokemon) => {
        const response = await fetch(curPokemon.url);
        const data = await response.json();
        return data;
      });
      const responsePokemon = await Promise.all(detailPokemonData);

      console.log(responsePokemon);

      setPokemon(responsePokemon);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      <header>
        <h1>Lets Catch Pokemon</h1>
      </header>
      <div>
        <input
          type="text"
          placeholder="Search Pokemone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="box">
        {searchData.map((curPokemon) => {
          return <PokemonData key={curPokemon.id} pokemonData={curPokemon} />;
        })}
      </div>
    </>
  );
}
