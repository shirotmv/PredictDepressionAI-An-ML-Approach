import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcrastinacionComponent } from './procrastinacion.component';

describe('ProcrastinacionComponent', () => {
  let component: ProcrastinacionComponent;
  let fixture: ComponentFixture<ProcrastinacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcrastinacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcrastinacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
