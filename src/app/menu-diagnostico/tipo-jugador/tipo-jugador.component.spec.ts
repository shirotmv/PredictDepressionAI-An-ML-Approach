import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoJugadorComponent } from './tipo-jugador.component';

describe('TipoJugadorComponent', () => {
  let component: TipoJugadorComponent;
  let fixture: ComponentFixture<TipoJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoJugadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
