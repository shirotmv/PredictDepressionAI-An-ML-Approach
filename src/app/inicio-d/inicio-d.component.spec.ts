import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDComponent } from './inicio-d.component';

describe('InicioDComponent', () => {
  let component: InicioDComponent;
  let fixture: ComponentFixture<InicioDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
