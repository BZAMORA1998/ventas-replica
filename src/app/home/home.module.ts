import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { ModulosComponent } from './modulos/modulos.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ComprasComponent } from './compras/compras.component';
import { VentasComponent } from './ventas/ventas.component';
import { MovimientosDeCajasComponent } from './movimientos-de-cajas/movimientos-de-cajas.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { KardexComponent } from './kardex/kardex.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [SeguridadComponent, ModulosComponent, ComprasComponent, VentasComponent, MovimientosDeCajasComponent, DevolucionesComponent, KardexComponent, ReportesComponent, ProductosComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })  
  ]
})
export class HomeModule { }
