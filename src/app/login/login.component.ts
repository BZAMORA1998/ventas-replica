import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../service/auth.service';
import { Sweetalert2Component } from '../util/sweetalert2/sweetalert2.component';
declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:any="BZAMORA";
  contrasena:any="1234";
  langArray:any;

  public activeLang = 'es';
  constructor(
    private _translate: TranslateService,
    private _sweetalert2Component: Sweetalert2Component,
    private _router:Router,
    private _auth: AuthService 
  ) {
    
  }

  /**
   * Cambia el lenguaje
   * @param activeLang 
   */
  public cambiarLenguaje(activeLang) {
    this.activeLang = activeLang;
    this._translate.use(activeLang);
    localStorage.setItem("languaje",activeLang);
  }

  @HostListener('document:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      if(this.usuario!="" && this.contrasena!="" && this.usuario!=null && this.contrasena!=null){
         this.postAutenticacion()
      }
    }
  }

  data:any=[
    {
    "id":"en",
    "nombre":"En"
    },
    {
      "id":"es",
      "nombre":"Es"
    }
  ];


  typeInputF="password";
   showPF:boolean=true;
    mostrarPassword(){
  
      if(this.typeInputF=="text"){
        this.showPF=true;
        this.typeInputF="password";
      }else{
        this.showPF=false;
        this.typeInputF="text";
      }
    }

  ngOnInit(): void {
    this._translate.setDefaultLang(this.activeLang);
    localStorage.removeItem("data");
    localStorage.removeItem("autenticado");
  }

  validaCamposVacios(){
    if(this.usuario!="" && this.contrasena!="" && this.usuario!=null && this.contrasena!=null){
      $("#btn-ok").prop('disabled',false);
    }else{
      $("#btn-ok").prop('disabled',true);
    }
  }

  setUsuario(usuario){
    this.usuario=usuario;
    this.validaCamposVacios();
  }

  setContrasena(contrasena){
    this.contrasena=contrasena;
    this.validaCamposVacios();
  }

  /**
   * @author Bryan Zamora
   * @param user 
   * @param password 
   * @description Autenticacion de usuario
   */
   postAutenticacion(){
    this._sweetalert2Component.loading(true);
    this._auth.loginP(this.usuario,this.contrasena).subscribe(
      Response=>{
          this._sweetalert2Component.loading(false);
          if(Response['data'].esContrasenaPrimeraVez==null || Response['data'].esContrasenaPrimeraVez==false){
             this._router.navigate(['../home']);
          }else{
            this._router.navigate(['../cambiar-contrasena']);
          }
          localStorage.setItem("data",JSON.stringify(Response['data']));
          localStorage.setItem("autenticado",JSON.stringify(true));
        },
      error=>{
          this._sweetalert2Component.showModalError(error.error.message);
        }
      );
    }
}
