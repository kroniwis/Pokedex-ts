import { Pokemon } from "./models/Pokemon";
import { PokemonRepository } from "./repositories/PokemonRepository";
import { PokemonService } from "./services/PokemonService";

<<<<<<< HEAD
const DEFAULT_POKEMONS: Record<string, Pokemon> = {
=======
const DEFAULT_POKEMONS = {
>>>>>>> 4fd9ea85d7b01b354b99450d7b6d49ebaa1d11bb
  bulbasaur: new Pokemon("bulbasaur", 96, {
    hp: 95,
    attack: 65,
    defense: 90,
    speed: 70,
  }),
  charmander: new Pokemon("charmander", 79, {
    hp: 78,
    attack: 95,
    defense: 82,
    speed: 88,
  }),
  squirtle: new Pokemon("squirtle", 64, {
    hp: 78,
    attack: 75,
    defense: 68,
    speed: 65,
  }),
  pikachu: new Pokemon("pikachu", 81, {
    hp: 85,
    attack: 110,
    defense: 75,
    speed: 120,
  }),
  mewtwo: new Pokemon("mewtwo", 100, {
    hp: 106,
    attack: 130,
    defense: 90,
    speed: 130,
  }),
  dragonite: new Pokemon("dragonite", 88, {
    hp: 91,
    attack: 134,
    defense: 95,
    speed: 80,
  }),
};

const pokemonRepository = new PokemonRepository();
const pokemonService = new PokemonService(pokemonRepository);

function main() {
<<<<<<< HEAD
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case "add":
      const pokemonName = args[1];
      if (!pokemonName) {
        console.error("Please provide a Pokémon name.");
        return;
      }
      const pokemon = DEFAULT_POKEMONS[pokemonName];
      if (!pokemon) {
        console.error("Pokémon not found.");
        return;
      }
      pokemonRepository.addPokemon(pokemon);
      console.log(`Added Pokémon: ${pokemonName}`);
      break;

    case "average":
      const averageLevel = pokemonService.getAverageLevel();
      if (averageLevel === 0) {
        console.log("No Pokémon available to calculate average level.");
        return;
      }
      console.log(`Average Level: ${averageLevel.toFixed(2)}`);
      break;

    case "fastest":
      const fastestPokemon = pokemonService.getFastestPokemon();
      if (fastestPokemon) {
        console.log(`Fastest Pokémon: ${fastestPokemon.name}`);
      } else {
        console.log("No Pokémon available.");
      }
      break;

    default:
      console.log("Unknown command. Available commands:");
      console.log("  add <pokemonName>");
      console.log("  average");
      console.log("  fastest");
      break;
  }
=======
  pokemonRepository.addPokemon(DEFAULT_POKEMONS.bulbasaur);
  pokemonRepository.addPokemon(DEFAULT_POKEMONS.mewtwo);
  pokemonRepository.addPokemon(DEFAULT_POKEMONS.dragonite);

  const averageLevel = pokemonService.getAverageLevel();
  const fastestPokemon = pokemonService.getFastestPokemon();
  if (averageLevel < 80) throw new Error("Average level is less than 80");
  console.log("Average level: ", averageLevel);
  console.log("Fastest pokemon: ", fastestPokemon);
>>>>>>> 4fd9ea85d7b01b354b99450d7b6d49ebaa1d11bb
}

main();
