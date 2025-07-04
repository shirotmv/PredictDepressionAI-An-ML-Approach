import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuDiagnosticoComponent } from '../menu-diagnostico.component';
import { BarraLateralComponent } from '../../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-aislamiento',
  standalone: true,
  imports: [RouterLink, MenuDiagnosticoComponent, BarraLateralComponent],
  templateUrl: './aislamiento.component.html',
  styleUrl: './aislamiento.component.scss'
})
export class AislamientoComponent {

}
