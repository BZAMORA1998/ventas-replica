import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
     path: '', component: AppComponent, children: [
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
