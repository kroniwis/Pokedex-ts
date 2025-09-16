import { PokemonRepository } from "../repositories/PokemonRepository";
import { Pokemon } from "../models/Pokemon";

export class PokemonService {
  constructor(private pokemonRepository: PokemonRepository) {}

  getAverageLevel(): number {
    const pokemon = this.pokemonRepository.getPokemonList();
    if (pokemon.length === 0) return 0;
    const totalLevel = pokemon.reduce((acc, pokemon) => acc + pokemon.level, 0);
    return totalLevel / pokemon.length;
  }

  getFastestPokemon(): Pokemon | null {
    const pokemon = this.pokemonRepository.getPokemonList();
    if (pokemon.length === 0) return null;
    return pokemon.sort((a, b) => b.stats.speed - a.stats.speed)[0];
  }
}
