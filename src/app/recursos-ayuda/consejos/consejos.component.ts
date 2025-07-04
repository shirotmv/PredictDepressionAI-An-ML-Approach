import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';
import { BarraSuperiorComponent } from '../../barra-superior/barra-superior.component';

@Component({
  selector: 'app-consejos',
  standalone: true,
  imports: [RouterLink, AppComponent,BarraSuperiorComponent],
  templateUrl: './consejos.component.html',
  styleUrl: './consejos.component.scss'
})
export class ConsejosComponent {

}
