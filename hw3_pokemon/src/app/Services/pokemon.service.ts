import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse } from "src/app/Interfaces/pokemon.interface";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }

  getPokemon(pokemon: string) {
    return this.http.get<PokemonResponse>(this.url + pokemon)
  }
}
