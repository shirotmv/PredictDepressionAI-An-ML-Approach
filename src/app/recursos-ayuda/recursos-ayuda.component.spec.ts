import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosAyudaComponent } from './recursos-ayuda.component';

describe('RecursosAyudaComponent', () => {
  let component: RecursosAyudaComponent;
  let fixture: ComponentFixture<RecursosAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecursosAyudaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursosAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
