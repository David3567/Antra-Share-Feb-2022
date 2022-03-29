import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PokemonResponse } from '../interfaces/pokemon.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  base_URL = 'https://pokeapi.co/api/v2/pokemon'

  getPokemon(pokemon: string) {
    return this.http.get<PokemonResponse>([this.base_URL, pokemon].join("/").toLowerCase()).pipe(
      tap(detail => console.log(pokemon, detail))
    );
  }
}
