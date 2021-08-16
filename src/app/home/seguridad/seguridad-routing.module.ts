import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { SeguridadComponent } from './seguridad.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
     path: '', component: SeguridadComponent, children: [
      { 
        path: 'usuarios',  component: UsuariosComponent 
      },
      { 
        path: 'crear-usuario',  component: CrearUsuarioComponent 
      },
      {
        path: '', redirectTo: 'usuarios', pathMatch: 'full'
      },
      { 
        path: '**', component: UsuariosComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
