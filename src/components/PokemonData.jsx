/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";

export default function PokemonData({ pokemonData }) {
  return (
    <div className="main_div">
      <section>
        <div className="boxes">
          <div className="img-div">
            <img
              src={pokemonData.sprites.other.dream_world.front_default}
              alt={pokemonData.name}
            />
          </div>
          <div>
            <ul>
              <li className="pokemon_name">{pokemonData.name}</li>
            </ul>
          </div>
          <div className="pokemon_types">
            <p>
              {pokemonData.types
                .map((curTypes) => curTypes.type.name)
                .join(", ")}
            </p>
          </div>
          <div className="heigt-weight-speed">
            <div className="height">
              <p>Height: {pokemonData.height}</p>
            </div>
            <div className="weight">
              <p>Weight: {pokemonData.weight}</p>
            </div>
            <div className="speed">
              <p>Speed: {pokemonData.stats[5].base_stat}</p>
            </div>
          </div>
          <div className="last_div">
            <div>
              <p>{pokemonData.base_experience}</p>
              <span>Experience</span>
            </div>
            <div className="attack">
              <p>{pokemonData.stats[1].base_stat}</p>
              <span>attack</span>
            </div>
            <div>
              <p>
                {pokemonData.abilities
                  .map((abilitieInfo) => abilitieInfo.ability.name)
                  .slice(0, 1)
                  .join(", ")}
              </p>
              <span>abilities</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
