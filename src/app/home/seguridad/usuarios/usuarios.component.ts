import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Sweetalert2Component } from 'src/app/util/sweetalert2/sweetalert2.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  setUsuario(usuario){
    this.valor=usuario;
  }

  public activeLang = 'es';
  constructor(private _translate: TranslateService,
    private _usuarioService:UsuarioService,
    private sweetalert2Component:Sweetalert2Component
    ) 
  {
    this.activeLang=localStorage.getItem("languaje");
    this._translate.setDefaultLang(this.activeLang);
  }

  public data=null;

  ngOnInit(): void {
    this.listarUsuario();
  }

  setEstado(estado){
    console.log("estado: "+estado);
    this.estado=estado;
  }

  dataEstado:any=[
    {
    "id":"TODOS",
    "nombre":"Todos"
    },
    {
      "id":"ACTIVO",
      "nombre":"Activo"
    },
    {
      "id":"INACTIVO",
      "nombre":"Inactivo"
      },
  ];


  actualizarUsuario(data){
      this.sweetalert2Component.loading(true);
      this._usuarioService.putActualizarUsuario(data).subscribe(
        Response=>{
          this.dataUsuarioId=Response.data;
          this.sweetalert2Component.showModalConfirmacion(Response.message,null);
          this.listarUsuario();
        },
        error=>{
          console.log(error.error.message);
          this.sweetalert2Component.loading(false);
          this.sweetalert2Component.showModalError(error.error.message);
        }
      ); 
  }

  dataUsuarioId=
  {
    secuenciaUsuario:0,
    primerNombre:"",
    primerApellido:"",
    segundoNombre:"",
    segundoApellido:"",
    secuenciaTipoIdentificacion:0,
    secuenciaGenero:0,
    fechaNacimiento:"",
    usuario:"",
    numeroIdentificacion:"",
    secuenciaPais:0,
    secuenciaProvincia:0,
    secuenciaCiudad:0,
    email:"",
    edad:"",
    telefonoMovil:"",
    telefonoFijo:"",
    direccion:""
};
  getUsuarioXId(idUsuario){
    this._usuarioService.getUsuarioXId(idUsuario).subscribe(
      Response=>{
        this.dataUsuarioId=Response.data;
      },
      error=>{
        console.log(error.error.message);
      }
    ); 
   }

getpaginacion(page){
  this.page=page;
  this.listarUsuario();
}

/*
*Valida si es vacio
*/
validarVacio(target){
  if(target=="")
   this.listarUsuario();
};

public page:Number=1;
public perPage:Number=4;
public totalRows:Number=0;
public mostrarPag:Boolean=false;
public valor:String="";
public estado:String="TODOS";
estadoUsuario(){
  this.listarUsuario();
}


dataRoles=[];
guardarRol(data){
  this.dataRoles=[];
  console.log(data);
  data.forEach(element => {
    if(element.esSelect==true)
      this.dataRoles.push(element.secuenciaRol);
  });
}

/**
 * @author Bryan Zamora
 * @description Consulta la lista de usuarios
 */
listarUsuario(){
  this._usuarioService.getConsultaUsuario(this.page,this.perPage,this.valor,this.estado).subscribe(
    Response=>{
      this.mostrarPag=false;
      this.data=Response["data"].rows;
      this.totalRows=Response["data"].totalRows;
      if(this.data.length>=this.perPage || this.page!=1){
        this.mostrarPag=true;
      }
    },
    error=>{
      console.log(error.error.message);
    }
  ); 
}

/**
 * @author Bryan Zamora
 * @description Activa o inactiva el usuario
 */
activarOInactivarUsuario(secuenciaUsuario){
  this._usuarioService.putActivarOInactivarUsuario(secuenciaUsuario).subscribe(
    Response=>{
      
    },
    error=>{
      console.log(error.error.message);
      this.sweetalert2Component.showModalError(error.error.message);
    }
  ); 
}

/**
 * @author Bryan Zamora
 * @param secuenciaUsuario 
 * @description Elimina el usuario
 */
  a:any;
  deleteEliminarUsuario(secuenciaUsuario,usuario){ 
    Swal.fire({
      title: "Está seguro que desea eliminar el usuario "+usuario+".",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this._usuarioService.eliminarUsuario(secuenciaUsuario).subscribe(
          Response=>{
            this.listarUsuario();

            Swal.fire(
              'Eliminado!',
              "Se ha eliminado el usuario "+usuario+" con exito.",
              'success'
            )
          },
          error=>{
            console.log(error.error.message);
            this.sweetalert2Component.showModalError(error.error.message);
          }
        ); 
      }
    })
  }
}
