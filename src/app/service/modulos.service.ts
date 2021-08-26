import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  constructor(private apiService: ApiService,private http: HttpClient){}

  getConsultarModulosPorUsuario(booIncluirModulosNoParametrizados,secuenciaUsuario) {
    return this.apiService.ApiCallSpring("GET",`/usuarios/modulos?incluirModulosNoParametrizados=${booIncluirModulosNoParametrizados}&secuenciaUsuario=${secuenciaUsuario}`,null,null);
  }

  putActualizaModulosPorUsuario(secuenciaUsuario,body) {
    return this.apiService.ApiCallSpring("PUT",`/usuarios/modulos?secuenciaUsuario=${secuenciaUsuario}`,body,null);
  }
  
}
