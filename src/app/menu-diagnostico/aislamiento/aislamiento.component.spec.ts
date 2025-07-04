import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AislamientoComponent } from './aislamiento.component';

describe('AislamientoComponent', () => {
  let component: AislamientoComponent;
  let fixture: ComponentFixture<AislamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AislamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AislamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
