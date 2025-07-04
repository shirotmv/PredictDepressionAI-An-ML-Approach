import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink,BarraLateralComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

}
