import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModulosComponent } from './modulos/modulos.component';
import { SeguridadComponent } from './seguridad/seguridad.component';

const routes: Routes = [
  {
     path: '', component: HomeComponent, children: [
      { 
        path: 'seguridad',  component: SeguridadComponent 
      },
      { 
        path: 'modulos',  component: ModulosComponent 
      },
      {
        path: '', redirectTo: 'modulos', pathMatch: 'full'
      },
      { 
        path: '**', component: ModulosComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
