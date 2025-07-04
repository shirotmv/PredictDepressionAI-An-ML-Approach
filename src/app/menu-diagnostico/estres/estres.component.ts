import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuDiagnosticoComponent } from '../menu-diagnostico.component';
import { BarraLateralComponent } from '../../barra-lateral/barra-lateral.component';


@Component({
  selector: 'app-estres',
  standalone: true,
  imports: [RouterLink, MenuDiagnosticoComponent,BarraLateralComponent],
  templateUrl: './estres.component.html',
  styleUrl: './estres.component.scss'
})
export class EstresComponent {

}
