import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import "rxjs/add/operator/map"; 
import {Observable} from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { ModulosService } from './modulos.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
    private _modulosService:ModulosService,
    private router:Router,
    ){  
    }

  permisoModulo:Boolean=false;
  entro:Boolean=false;
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {

      return this._modulosService.getConsultarPermisoModulo(route.data.role)
      .map(Response => {

        this.permisoModulo=Response['data'];
        
        if(this.auth.estaAutenticado() && this.permisoModulo){
          return true;
        }
        this.router.navigate(['../login']);
        return false;
     });


  }
}
