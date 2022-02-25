import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDeckComponent } from './pokemon-deck.component';

describe('PokemonDeckComponent', () => {
  let component: PokemonDeckComponent;
  let fixture: ComponentFixture<PokemonDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
