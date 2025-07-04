import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.scss'
})
export class BarraLateralComponent {
  isClosed = false;

  toggleMenu() {
    this.isClosed = !this.isClosed;
  }
}
