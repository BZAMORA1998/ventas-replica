import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../service/auth.guard';
import { HomeComponent } from './home.component';
import { ModulosComponent } from './modulos/modulos.component';
import { SeguridadComponent } from './seguridad/seguridad.component';

const routes: Routes = [
  {
     path: '', component: HomeComponent, children: [
      {
        path: 'seguridad',loadChildren:()=> import('./seguridad/seguridad.module').then(m => m.SeguridadModule)
      },
      { 
        path: 'modulos',  component: ModulosComponent, canActivate: [AuthGuard], 
        data: {role: 'GENERAL'} 
      },
      {
        path: '', redirectTo: 'modulos', pathMatch: 'full', canActivate: [AuthGuard], 
        data: {role: 'GENERAL'} 
      },
      { 
        path: '**', component: ModulosComponent, canActivate: [AuthGuard], 
        data: {role: 'GENERAL'} 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
