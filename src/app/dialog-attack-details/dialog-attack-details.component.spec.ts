import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAttackDetailsComponent } from './dialog-attack-details.component';

describe('DialogAttackDetailsComponent', () => {
  let component: DialogAttackDetailsComponent;
  let fixture: ComponentFixture<DialogAttackDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAttackDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAttackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
