import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BarraLateralComponent } from "./barra-lateral/barra-lateral.component";
import { ContenidoComponent } from './contenido/contenido.component';
import { RecursosAyudaComponent } from './recursos-ayuda/recursos-ayuda.component';
import { MenuDiagnosticoComponent } from './menu-diagnostico/menu-diagnostico.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContenidoComponent,
    RouterLink,
    MenuDiagnosticoComponent,
    RecursosAyudaComponent,
    BarraLateralComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '20242-IA-FRONT';
}
