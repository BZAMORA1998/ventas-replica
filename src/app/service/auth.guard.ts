import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import "rxjs/add/operator/map"; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  autenticado;
  constructor(private auth: AuthService,
              private router:Router,
              private _rolesService:RolesService
              ){  
              }

  canActivate(route: ActivatedRouteSnapshot):Observable<boolean>{
      return null;
  }
}
