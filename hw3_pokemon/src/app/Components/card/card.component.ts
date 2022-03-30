import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from "src/app/Services/pokemon.service";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon!: string;

  imageInfo!: any;
  imageURL!: string;
  name!: string;
  id!: number;
  weight!: number;
  height!: number;
  type1!: string;
  type2!: string;
  x!: string;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemon(this.pokemon.toLowerCase()).subscribe(
      (data) => {
        this.imageInfo = data.sprites.other.dream_world;
        this.imageURL = this.imageInfo.front_default;
        this.name = data.forms[0].name;
        this.id = data.id; 
        this.weight = data.weight;
        this.height = data.height;
        this.type1 = data.types[0].type.name;
        this.type2 = data.types[1].type.name;
      }
    );
  }
}
