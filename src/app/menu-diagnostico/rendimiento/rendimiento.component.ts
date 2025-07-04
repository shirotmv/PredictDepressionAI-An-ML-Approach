import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuDiagnosticoComponent } from '../menu-diagnostico.component';
import { BarraLateralComponent } from '../../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-rendimiento',
  standalone: true,
  imports: [RouterLink, MenuDiagnosticoComponent,BarraLateralComponent],
  templateUrl: './rendimiento.component.html',
  styleUrl: './rendimiento.component.scss'
})
export class RendimientoComponent {

}
