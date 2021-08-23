import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { UtilModule } from 'src/app/util/util.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UsuariosCAComponent } from './usuarios-ca/usuarios-ca.component';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HomeRoutingModule } from '../home-routing.module';

@NgModule({
  declarations: [UsuariosComponent, CrearUsuarioComponent,UsuariosCAComponent],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    UtilModule,
    FormsModule,
    NgxSkeletonLoaderModule.forRoot(),
    MatTooltipModule,
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
export class SeguridadModule { }
