import { Component } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [RouterLink,BarraLateralComponent],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.scss'
})
export class ConfiguracionComponent {

}
