import { Injectable} from '@angular/core';
import {ApiService} from './api.service'
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService{
 
  getConsultarEdad(fechaNacimiento: string) {
    return this.apiService.ApiCallSpring("GET",`/general/calcularEdad?fechaNacimiento=${fechaNacimiento}`,null,null);
  }

  constructor(private apiService: ApiService,private http: HttpClient){}



}
