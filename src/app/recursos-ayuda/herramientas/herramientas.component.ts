import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';
import { RecursosAyudaComponent } from '../recursos-ayuda.component';
import { BarraSuperiorComponent } from '../../barra-superior/barra-superior.component';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [RouterLink, AppComponent, RecursosAyudaComponent, BarraSuperiorComponent],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.scss'
})
export class HerramientasComponent {

}
