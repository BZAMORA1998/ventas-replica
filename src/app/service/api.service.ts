import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { TokenService } from './token.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    
    URL_API_SPRING = environment.apiUrlSpring;

    constructor(private http: HttpClient,private _tokenService:TokenService,private _translate: TranslateService,) { }
    public ApiLoginSpring(method,endpoint,data,headers):Observable<any>{

        if(headers!=null){
            headers.set("Content-Type","application/json");
        }

        switch (method) {
            case "POST":
                return this.http.post(this.URL_API_SPRING + endpoint, data, { headers: headers , params : data});
        }        
    }


    public ApiCallSpring(method,endpoint,data,headers):Observable<any>{
        
        if(headers!=null){
            headers.set("Content-Type","application/json");
            headers.set("Authorization","Bearer " + this.getToken());
            headers.set("Accept-Language","en-US");
        }else{
            headers = new HttpHeaders({
              "Content-Type":"application/json",
              "Authorization":"Bearer " + this.getToken(),
              "Accept-Language":"en-US"
            });
        }

        switch (method) {
            case "GET":
                return this.http.get(this.URL_API_SPRING + endpoint, { headers: headers , params: data })
            case "POST":
                return this.http.post(this.URL_API_SPRING + endpoint, data, { headers: headers , params : data});
            
            case "PUT":
                return this.http.put(this.URL_API_SPRING + endpoint, data, { headers: headers , params : data});
            case "DELETE":
            return this.http.delete(this.URL_API_SPRING + endpoint, { headers: headers, params: data });
        }        
    }

    getToken(){
        return this._tokenService.token();
    }
}
