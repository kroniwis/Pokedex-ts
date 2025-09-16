import fs from "fs";
import path from "path";
import { Pokemon } from "../models/Pokemon";

export class PokemonRepository {
  private readonly FILE_PATH = path.join(
    __dirname,
    "../data/pokemon-list.json"
  );
  private pokemonList: Pokemon[] = [];

  constructor() {
    this.pokemonList = this.loadFromFile();
  }

  private loadFromFile() {
    const filePath = this.FILE_PATH;

    try {
      const data = fs.readFileSync(filePath);
      const jsonData: Pokemon[] = JSON.parse(data.toString());
      return jsonData;
    } catch (error) {
      console.error("Error al leer o analizar el archivo JSON:", error);
      return [];
    }
  }

  private saveToFile() {
    const jsonString: string = JSON.stringify(this.pokemonList, null, 2);
    fs.writeFile(this.FILE_PATH, jsonString, (err) => {
      if (err) {
        console.error("Error al escribir el archivo JSON:", err);
      } else {
        console.log(`Archivo ${this.FILE_PATH} creado exitosamente`);
      }
    });
  }

  getPokemonList() {
    return this.pokemonList;
  }

  addPokemon(pokemon: Pokemon) {
    console.log(`Adding pokemon: ${pokemon.name}`);
    this.pokemonList.push(pokemon);
    this.saveToFile();
  }
}
