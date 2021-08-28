import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/service/auth.guard';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { SeguridadComponent } from './seguridad.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
     path: '', component: SeguridadComponent, children: [
      { 
        path: 'usuarios',  component: UsuariosComponent, canActivate: [AuthGuard], 
        data: {role: 'SEGURIDAD'} 
      },
      { 
        path: 'crear-usuario',  component: CrearUsuarioComponent, canActivate: [AuthGuard], 
        data: {role: 'SEGURIDAD'} 
      },
      {
        path: '', redirectTo: 'usuarios', pathMatch: 'full',canActivate: [AuthGuard], 
        data: {role: 'SEGURIDAD'} 
      },
      { 
        path: '**', component: UsuariosComponent,canActivate: [AuthGuard], 
        data: {role: 'SEGURIDAD'} 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
