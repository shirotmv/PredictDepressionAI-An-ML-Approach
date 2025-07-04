import { Component } from '@angular/core';
import { NoticiasComponent } from './noticias/noticias.component';
import { ApoyoComponent } from './apoyo/apoyo.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-recursos-ayuda',
  standalone: true,
  imports: [NoticiasComponent, 
            ApoyoComponent, 
            HerramientasComponent, 
            ConsejosComponent,
            EnlacesComponent,
            PreguntasComponent,
            RouterLink,
            RouterOutlet,
            RouterLinkActive,
            FooterComponent,
            BarraSuperiorComponent
            
  ],
  templateUrl: './recursos-ayuda.component.html',
  styleUrl: './recursos-ayuda.component.scss'
})
export class RecursosAyudaComponent {

}
