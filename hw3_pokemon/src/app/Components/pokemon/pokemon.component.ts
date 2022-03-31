import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from 'src/app/Interfaces/pokemon.interface';
import { PokemonService } from "src/app/Services/pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.less']
})
export class PokemonComponent implements OnInit {

  clickedPokemon: string = '';

  starterPokemon: string[] = [ "Bulbasaur", "Squirtle", "Charmander" ];
  //starterPokemon: string[] = [ "Bulbasaur","ivysaur", "venusaur", "Charmander", "charmeleon", "charizard", "Squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill" ];


  pokemonName = '';
  
  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    for (let i = 0; i < this.starterPokemon.length; i++) {
      this.pokemonName = this.starterPokemon[i].toLowerCase();
    }
  }

  onClick(clickedPoke: string) {
    if (this.starterPokemon.length > 1) {
      this.clickedPokemon = clickedPoke;
      console.log(this.clickedPokemon);
      this.starterPokemon = [this.clickedPokemon];
    }

    else {
      this.starterPokemon = [ "Bulbasaur", "Squirtle", "Charmander" ];
      //this.starterPokemon= [ "Bulbasaur","ivysaur", "venusaur", "Charmander", "charmeleon", "charizard", "Squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill" ];

    }

  }

}
