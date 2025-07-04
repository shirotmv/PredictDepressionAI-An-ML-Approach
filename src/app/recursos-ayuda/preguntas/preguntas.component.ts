import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecursosAyudaComponent } from '../recursos-ayuda.component';
import { AppComponent } from '../../app.component';
import { BarraSuperiorComponent } from '../../barra-superior/barra-superior.component';

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [RouterLink, RecursosAyudaComponent, AppComponent, BarraSuperiorComponent],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.scss'
})
export class PreguntasComponent {

}
