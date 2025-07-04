import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDiagnosticoComponent } from './menu-diagnostico.component';

describe('MenuDiagnosticoComponent', () => {
  let component: MenuDiagnosticoComponent;
  let fixture: ComponentFixture<MenuDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDiagnosticoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
