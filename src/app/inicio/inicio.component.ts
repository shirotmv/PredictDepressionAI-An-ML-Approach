import { Component } from '@angular/core';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BarraSuperiorComponent, FooterComponent,RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
