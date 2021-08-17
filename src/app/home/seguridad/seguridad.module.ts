import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { UtilModule } from 'src/app/util/util.module';


@NgModule({
  declarations: [UsuariosComponent, CrearUsuarioComponent],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    UtilModule
  ]
})
export class SeguridadModule { }
