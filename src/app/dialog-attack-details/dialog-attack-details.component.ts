import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-attack-detail',
  templateUrl: './dialog-attack-details.component.html',
  styleUrls: ['./dialog-attack-details.component.scss']
})
export class DialogAttackDetailsComponent implements OnInit {

  constructor (
    public dialogRef: MatDialogRef<DialogAttackDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }
}
