import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuDiagnosticoComponent } from '../menu-diagnostico.component';
import { BarraLateralComponent } from '../../barra-lateral/barra-lateral.component';


@Component({
  selector: 'app-depresion',
  standalone: true,
  imports: [RouterLink, MenuDiagnosticoComponent,BarraLateralComponent],
  templateUrl: './depresion.component.html',
  styleUrl: './depresion.component.scss'
})
export class DepresionComponent {

}
