import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
@Component({
  selector: 'app-inicio-d',
  standalone: true,
  imports: [RouterLink,BarraLateralComponent],
  templateUrl: './inicio-d.component.html',
  styleUrl: './inicio-d.component.scss'
})
export class InicioDComponent {

}
