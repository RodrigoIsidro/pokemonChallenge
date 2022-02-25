import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAttackDetailsComponent } from '../dialog-attack-details/dialog-attack-details.component';
import { PokemontcgService } from '../services/pokemontcg.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  id: string;
  pokemon: any;
  loading = false;

  constructor(
    private pokemontcgSvc: PokemontcgService,
    private actRoute: ActivatedRoute,
    private dialog: MatDialog
  ) { 
    this.id = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loading = true;
    this.pokemontcgSvc.getDataById(this.id).subscribe((response: any) => {
      this.pokemon = response.data;
      this.loading = false;
    });
  }

  openDialogAttack (attack: any): void {
    this.dialog.open(DialogAttackDetailsComponent, {
      width: '480px',
      data: attack
    });
  }
}
