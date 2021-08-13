import { Component, OnInit } from '@angular/core';
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

  usuario:any=null;
  contrasena:any=null;
  langArray:any;

  public activeLang = 'es';
  constructor(
    private _translate: TranslateService,
    private _sweetalert2Component: Sweetalert2Component,
    private _router:Router,
    private _auth: AuthService 
  ) {
    this._translate.setDefaultLang(this.activeLang);
  }

  public cambiarLenguaje() {
    console.log(this.activeLang);
    this._translate.use(this.activeLang);
  }


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
    $("#usuario").focus(function() {
      $("#usuarioF").css("margin-top",-20);
      $("#usuario").css("border-bottom","1px solid red");
      $("#usuarioF").css("font-size","13px");
    });
     $("#usuario").blur(() => {
        if(this.usuario==""){
            $("#usuarioF").css("margin-top",0);
            $("#usuario").css("border-bottom","1px solid blue");
            $("#usuarioF").css("font-size","15px");
        }
    });

    $("#contrasena").focus(function() {
      $("#contrasenaF").css("margin-top",-20);
      $("#contrasena").css("border-bottom","1px solid red");
    }).blur(() => {
        if(this.contrasena==""){
            $("#contrasenaF").css("margin-top",0);
            $("#contrasena").css("border-bottom","1px solid blue");
        }
    });    
  }

  validaCamposVacios(){
    if(this.usuario!="" && this.contrasena!="" && this.usuario!=null && this.contrasena!=null){
      $("#btn-ok").prop('disabled',false);
    }else{
      $("#btn-ok").prop('disabled',true);
    }
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
      (        Response: { [x: string]: any; })=>{
          this._sweetalert2Component.loading(false);
          if(Response['data'].esContrasenaPrimeraVez==null || Response['data'].esContrasenaPrimeraVez==false){
             this._router.navigate(['../home']);
          }else{
            this._router.navigate(['../cambiar-contrasena']);
          }
          localStorage.setItem("data",JSON.stringify(Response['data']));
        },
      (error: { error: { message: any; }; })=>{
          this._sweetalert2Component.showModalError(error.error.message);
        }
      );
    }
}
