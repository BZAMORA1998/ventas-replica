import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService,private http: HttpClient,private _translate: TranslateService) { }
  
  loginP(user,password) {
    var auth ="Basic "+ btoa(user+":"+password);
    var lg=localStorage.getItem('languaje');

    if(lg=="en"){
      lg="en-US";
    }
    
    const headers = new HttpHeaders({
      'Authorization': auth,
      "Accept-Language":lg
    });
    return this.apiService.ApiLoginSpring("POST","/autenticacion/login",null,headers)
      .pipe(map(resp => {
        
        localStorage.setItem("autenticado",JSON.stringify(true));
        localStorage.setItem("data",JSON.stringify(resp["data"]));

        return resp;
      }));
  }

  estaAutenticado(): boolean {
    return JSON.parse(localStorage.getItem('autenticado'));
  }
}
