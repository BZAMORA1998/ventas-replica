import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../service/auth.guard';
import { ComprasComponent } from './compras/compras.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { HomeComponent } from './home.component';
import { KardexComponent } from './kardex/kardex.component';
import { ModulosComponent } from './modulos/modulos.component';
import { MovimientosDeCajasComponent } from './movimientos-de-cajas/movimientos-de-cajas.component';
import { ProductosComponent } from './productos/productos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {
     path: '', component: HomeComponent, children: [
      {
        path: 'seguridad',loadChildren:()=> import('./seguridad/seguridad.module').then(m => m.SeguridadModule)
      },
      { 
        path: 'productos',  component: ProductosComponent, canActivate: [AuthGuard], 
        data: {role: 'PRODUCTOS'} 
      },
      { 
        path: 'compras',  component: ComprasComponent, canActivate: [AuthGuard], 
        data: {role: 'COMPRAS'} 
      },
      { 
        path: 'ventas',  component: VentasComponent, canActivate: [AuthGuard], 
        data: {role: 'VENTAS'} 
      },
      { 
        path: 'devoluciones',  component: DevolucionesComponent, canActivate: [AuthGuard], 
        data: {role: 'DEVOLUCIONES'} 
      },
      { 
        path: 'kardex',  component: KardexComponent, canActivate: [AuthGuard], 
        data: {role: 'KARDEX'} 
      },
      { 
        path: 'reportes',  component: ReportesComponent, canActivate: [AuthGuard], 
        data: {role: 'REPORTES'} 
      },
      { 
        path: 'movimientos_de_cajas',  component: MovimientosDeCajasComponent, canActivate: [AuthGuard], 
        data: {role: 'MOVIMIENTOS_DE_CAJAS'} 
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
