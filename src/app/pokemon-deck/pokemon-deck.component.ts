import { Component, OnInit } from '@angular/core';
import { PokemontcgService } from '../services/pokemontcg.service';

@Component({
  selector: 'app-pokemon-deck',
  templateUrl: './pokemon-deck.component.html',
  styleUrls: ['./pokemon-deck.component.scss']
})
export class PokemonDeckComponent implements OnInit {

  title = 'angular-pokemon-challenge';

  loading = false;
  pokemons: any;

  constructor(    
    private pokemontcgSvc: PokemontcgService
  ) { 

  }

  ngOnInit(): void {
    this.loading = true;
    this.pokemontcgSvc.getData().subscribe((response: any) => {
      this.pokemons = response.data;
      this.loading = false;
    });
  }
}
