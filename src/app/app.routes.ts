import { Routes } from '@angular/router';
import { RedireccionamientoComponent } from './redireccionamiento/redireccionamiento.component';
import { InicioComponent } from './inicio/inicio.component';
import { GestionarCartaPresentacionComponent } from './gestionar-carta-presentacion/gestionar-carta-presentacion.component';
import { AdministrarDocumentosComponent } from './administrar-documentos/administrar-documentos.component';
import { MisEvaluacionesComponent } from './mis-evaluaciones/mis-evaluaciones.component';
import { CorreoComponent } from './correo/correo.component';
import { SidebarComponent } from './sidebar/sidebar.component'
export const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        title: 'Componente inicio'
    }
    ,
    {
        path: 'cartappp',
        component:  GestionarCartaPresentacionComponent,
        title: 'Componente de cartas'
    }
    ,
    {
        path: 'documentacion',
        component:  AdministrarDocumentosComponent,
        title: 'Componente de documentos'
    }
    ,
    {
        path: 'evaluaciones',
        component:  MisEvaluacionesComponent,
        title: 'Componente de documentos'
    }
    ,
    {
        path: 'correo',
        component:  CorreoComponent,
        title: 'Componente de documentos'
    }
    ,
    {
        path: 'sidebar',
        component: SidebarComponent,
        title: 'Sidebar'
    }
    ,
    {
        path: 'redireccionamiento',
        component:  RedireccionamientoComponent,
        title: 'Componente de redireccionamiento'
    }
    ,
    
    {
        path: '**',
        redirectTo :''
    }
];
