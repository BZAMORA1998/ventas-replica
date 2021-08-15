import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { ModulosComponent } from './modulos/modulos.component';


@NgModule({
  declarations: [SeguridadComponent, ModulosComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
