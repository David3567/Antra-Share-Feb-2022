import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from 'src/app/Interfaces/pokemon.interface';
import { PokemonService } from "src/app/Services/pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.less']
})
export class PokemonComponent implements OnInit {

  starterPokemon: string[] = [ "Bulbasaur", "Squirtle", "Charmander" ];

  pokemonName = '';
  
  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    for (let i = 0; i < this.starterPokemon.length; i++) {
      this.pokemonName = this.starterPokemon[i].toLowerCase();
    }
  }

}
