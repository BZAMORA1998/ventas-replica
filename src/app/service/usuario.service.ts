import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private apiService: ApiService,private http: HttpClient){}


  /**
   * @description Consulta los usuarios de manera general
   * 
   * @author Bryan Zamora
   * @param page 
   * @param perPage 
   * @param valor 
   * @param estado 
   * @returns 
   */
  getConsultaUsuario(page,perPage,valor,estado):Observable<any>{
    return this.apiService.ApiCallSpring("GET",`/usuarios?page=${page}&perPage=${perPage}&cedulaCodigoUsuario=${valor}&estado=${estado}`,null,null);
  }
  
   /**
   * @description Elimina el usuario
   * 
   * @author Bryan Zamora
   * @param secuenciaUsuario 
   * @returns 
   */
  eliminarUsuario(secuenciaUsuario: any) {
    return this.apiService.ApiCallSpring("DELETE",`/usuarios/${secuenciaUsuario}/eliminarUsuario`,null,null);
  }

  
  /**
   * @description Crea un usuario
   * 
   * @author Bryan Zamora
   * @param user 
   * @returns 
   */
  postCrearUsuario(user):Observable<any>{
    return this.apiService.ApiCallSpring("POST","/usuarios/crearUsuario",user,null);
  }
  
  /**
   * @description Actualiza un usuario
   * 
   * @author Bryan Zamora
   * @param user 
   * @returns 
   */
  putActualizarUsuario(user):Observable<any>{
    return this.apiService.ApiCallSpring("PUT",`/usuarios/actualizarUsuario`,user,null);
  }

  /**
   * @description Cambia la contrasena
   * 
   * @author Bryan Zamora
   * @param contrasenia 
   * @returns 
   */
  postCambiarContrasena(contrasenia):Observable<any>{

    const objcontrasenia={
      "contrasenia":btoa(contrasenia)
    }

    return this.apiService.ApiCallSpring("POST","/usuarios/cambioContrasena",objcontrasenia,null);
  }

  /**
   * @description Consulta el usuario por id
   * 
   * @author Bryan Zamora
   * @param idUsuario 
   * @returns 
   */
  getUsuarioXId(idUsuario):Observable<any>{
    return this.apiService.ApiCallSpring("GET",`/usuarios/${idUsuario}/basica`,null,null);
  }
}
