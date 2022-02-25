import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDeckComponent } from './pokemon-deck/pokemon-deck.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  {path: '', component: PokemonDeckComponent},
  {path: 'pokemon-deck', component: PokemonDeckComponent},
  {path: 'pokemon-details/:id', component: PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
