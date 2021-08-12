import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.activeLang);
  }

  public cambiarLenguaje() {
    console.log(this.activeLang);
    this.translate.use(this.activeLang);
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
      console.log(true);
      $("#btn-ok").prop('disabled',false);
    }else{
      console.log(false);
      $("#btn-ok").prop('disabled',true);
    }
  }
}
