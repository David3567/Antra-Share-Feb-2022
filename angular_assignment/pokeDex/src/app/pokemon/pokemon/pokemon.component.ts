import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pikachu?: PokemonResponse;
  squirtle?: PokemonResponse;
  charmander?: PokemonResponse;
  bulbasaur?: PokemonResponse;
  starterPokemon: PokemonResponse[] = [this.pikachu!, this.squirtle!, this.charmander!, this.bulbasaur!];

  constructor(private pokeAPI: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.pokeAPI.getPokemon('pikachu').subscribe((data) => this.pikachu = data);
    this.pokeAPI.getPokemon('squirtle').subscribe((data) => this.squirtle = data);
    this.pokeAPI.getPokemon('charmander').subscribe((data) => this.charmander = data);
    this.pokeAPI.getPokemon('bulbasaur').subscribe((data) => this.bulbasaur = data);
  }
}
