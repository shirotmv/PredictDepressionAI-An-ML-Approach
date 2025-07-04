import { Component } from '@angular/core';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-evaluacion-m',
  standalone: true,
  imports: [BarraSuperiorComponent,FooterComponent,RouterLink],
  templateUrl: './evaluacion-m.component.html',
  styleUrl: './evaluacion-m.component.scss'
})
export class EvaluacionMComponent {

}
