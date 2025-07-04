import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionMComponent } from './evaluacion-m.component';

describe('EvaluacionMComponent', () => {
  let component: EvaluacionMComponent;
  let fixture: ComponentFixture<EvaluacionMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacionMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
