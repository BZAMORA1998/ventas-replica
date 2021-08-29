import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Sweetalert2Component } from '../util/sweetalert2/sweetalert2.component';


@Component({
  selector: 'app-olvido-contrasena',
  templateUrl: './olvido-contrasena.component.html',
  styleUrls: ['./olvido-contrasena.component.css'],
  providers:[UsuarioService]
})
export class OlvidoContrasenaComponent implements OnInit {

  public activeLang = 'es';
  constructor(
    private _translate: TranslateService,  private _usuarioService:UsuarioService,
    private sweetalert2Component:Sweetalert2Component) { 
    
  }

  ngOnInit(): void {
    this._translate.setDefaultLang(this.activeLang);
    localStorage.setItem("languaje",this.activeLang);
    this.validaSiEsVacio();
  }

  correo:any="";

  setCorreo(correo){  
    this.correo=correo;
    this.validaSiEsVacio();
  }

  
  @HostListener('document:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      if(this.correo!=""){
             this.recuperarContrasena();
      }
    }
  }

  /**
   * @description: Si el campo es null desabilita el input correo
   * @author: Bryan Zamora
   */
  validaSiEsVacio(){
    if(this.correo!=""){
      $("#aceptar").prop('disabled', false);
    }else{
      $("#aceptar").prop('disabled', true);
    }
  }

  /**
   * @description: Hace el envio de la nueva contraseña al correo
   * @author: Bryan Zamora
   */
  recuperarContrasena(){
    this.sweetalert2Component.loading(true);
    this._usuarioService.postRecuperarContrasena(this.correo).subscribe(
      Response=>{
        this.sweetalert2Component.loading(false);
        this.sweetalert2Component.showModalConfirmacion(Response.message,"../login");
      },
      error=>{
        this.sweetalert2Component.loading(false);
        this.sweetalert2Component.showModalError(error.error.message);
      }
    ); 
  }

}
