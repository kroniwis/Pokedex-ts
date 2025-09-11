import { PokemonRepository } from "../repositories/PokemonRepository";
import { Pokemon } from "../models/Pokemon";

export class PokemonService {
  constructor(private pokemonRepository: PokemonRepository) {}

  getAverageLevel(): number {
    /*
     * Write the code to get the average level of the pokemon list
     * - Use the repository: this.pokemonRepository.getPokemonList()
     * - Return a number (average level)
     * - If the list is empty, return 0
     */
    const pokemon = this.pokemonRepository.getPokemonList();
    if (pokemon.length === 0) return 0;
    const totalLevel = pokemon.reduce((acc, pokemon) => acc + pokemon.level, 0);
    return totalLevel / pokemon.length;
  }

  getFastestPokemon(): Pokemon | null {
    /**
     * Write the code to get the fastest pokemon of the pokemon list
     * - Compare pokemon.stats.speed
     * - Return the Pokemon object with the highest speed, or null if no pokemons
     */
    const pokemon = this.pokemonRepository.getPokemonList();
    if (pokemon.length === 0) return null;
    return pokemon.sort((a, b) => b.stats.speed - a.stats.speed)[0];
  }
}
