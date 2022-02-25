import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAttackDetailsComponent } from './dialog-attack-details/dialog-attack-details.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonDeckComponent } from './pokemon-deck/pokemon-deck.component';
import { NgxLoadingModule } from 'ngx-loading';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    DialogAttackDetailsComponent,
    PokemonDeckComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    ScrollingModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatDialogModule,
    NgxLoadingModule.forRoot({}),
    MatInputModule
  ],
  providers: [],
  bootstrap: [  
    AppComponent, 
  ]
})
export class AppModule { }

