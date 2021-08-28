import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { LoginComponent } from './login/login.component';
import { OlvidoContrasenaComponent } from './olvido-contrasena/olvido-contrasena.component';
import { AuthGuard } from './service/auth.guard';


const routes: Routes = [
  {
     path: '', component: AppComponent, children: [
      { 
        path: 'olvido-contrasena',  component: OlvidoContrasenaComponent 
      },
      { 
        path: 'cambiar-contrasena',  component: CambiarContrasenaComponent, canActivate: [AuthGuard], 
        data: {role: 'GENERAL'}  
      },
      { 
        path: 'login',  component: LoginComponent 
      },
      {
        path: 'home',loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      { 
        path: '**', component: LoginComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
