import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Sweetalert2Component } from 'src/app/util/sweetalert2/sweetalert2.component';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  constructor( private _usuarioService:UsuarioService,
    private sweetalert2Component:Sweetalert2Component) { }

  ngOnInit(): void {
  }

   /**
   * @author Bryan Zamora
   * @description Crea el usuario
   * @param data 
   */
    crearUsuario(data){
      this.sweetalert2Component.loading(true);
      this._usuarioService.postCrearUsuario(data).subscribe(
        Response=>{
          this.sweetalert2Component.loading(false);
          this.sweetalert2Component.showModalConfirmacion(Response.message,"../ventas/home/seguridad/usuarios/listar-usuarios");
        },
        error=>{
          this.sweetalert2Component.loading(false);
          this.sweetalert2Component.showModalError(error.error.message);
        }
    ); 
  }

}
