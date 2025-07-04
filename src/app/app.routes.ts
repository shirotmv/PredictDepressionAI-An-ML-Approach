import { Routes } from '@angular/router';
import { RecursosAyudaComponent } from './recursos-ayuda/recursos-ayuda.component';
import { PreguntasComponent } from './recursos-ayuda/preguntas/preguntas.component';
import { NoticiasComponent } from './recursos-ayuda/noticias/noticias.component';
import { ApoyoComponent } from './recursos-ayuda/apoyo/apoyo.component';
import { HerramientasComponent } from './recursos-ayuda/herramientas/herramientas.component';
import { ConsejosComponent } from './recursos-ayuda/consejos/consejos.component';
import { EnlacesComponent } from './recursos-ayuda/enlaces/enlaces.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuDiagnosticoComponent } from './menu-diagnostico/menu-diagnostico.component';
import { EstresComponent } from './menu-diagnostico/estres/estres.component';
import { AislamientoComponent } from './menu-diagnostico/aislamiento/aislamiento.component';
import { ProcrastinacionComponent } from './menu-diagnostico/procrastinacion/procrastinacion.component';
import { TipoJugadorComponent } from './menu-diagnostico/tipo-jugador/tipo-jugador.component';
import { RendimientoComponent } from './menu-diagnostico/rendimiento/rendimiento.component';
import { DepresionComponent } from './menu-diagnostico/depresion/depresion.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';

import { EvaluacionMComponent } from './evaluacion-m/evaluacion-m.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { HistorialComponent } from './historial/historial.component';
import { InicioDComponent } from './inicio-d/inicio-d.component';

export const routes: Routes = [
    { path: '', redirectTo:'inicio', pathMatch: 'full'},
    { path: 'home', component: AppComponent },
    { path: 'recursos-ayuda', component: RecursosAyudaComponent },
    { path: 'preguntas', component: PreguntasComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'apoyo', component: ApoyoComponent },
    { path: 'herramientas', component: HerramientasComponent },
    { path: 'consejos', component: ConsejosComponent },
    { path: 'enlaces', component: EnlacesComponent },
    { path: 'notfound', component: NotfoundComponent },
    { path: 'evaluacion', component: MenuDiagnosticoComponent },
    { path: 'estre', component: EstresComponent },
    { path: 'aislamiento', component: AislamientoComponent },
    { path: 'procrastinacion', component: ProcrastinacionComponent },
    { path: 'tipo-jugador', component: TipoJugadorComponent },
    { path: 'rendimiento', component: RendimientoComponent },
    { path: 'depresion', component: DepresionComponent },
    { path: 'lateral', component: BarraLateralComponent },

    { path: 'evaluacion_m', component:EvaluacionMComponent},
    { path:'inicio', component:InicioComponent},
    { path:'login', component:LoginComponent},
    { path:'register', component:RegisterComponent},
    { path:'perfil', component:PerfilComponent},
    { path:'configuracion',component:ConfiguracionComponent},
    { path:'historial', component:HistorialComponent},
    { path:'inicio_d', component:InicioDComponent}
];
