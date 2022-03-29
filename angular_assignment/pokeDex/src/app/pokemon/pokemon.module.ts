import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

import { PokemonComponent } from './pokemon/pokemon.component';



@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [PokemonComponent]
})
export class PokemonModule { }
