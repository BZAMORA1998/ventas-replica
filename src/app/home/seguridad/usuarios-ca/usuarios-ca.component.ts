import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from 'src/app/service/general.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { environment } from 'src/environments/environment';
declare var $:any;

@Component({
  selector: 'app-usuarios-ca',
  templateUrl: './usuarios-ca.component.html',
  styleUrls: ['./usuarios-ca.component.css'],
  providers:[GeneralService,UsuarioService,DatePipe]
})
export class UsuariosCAComponent implements OnInit {
  @Output () valueResponse: EventEmitter<any> = new EventEmitter();
  @Input () esCreacion:any=true;

  crearOActualizarUsuario(){
    this.valueResponse.emit(this.data);
  }

  constructor(
    private _generalService:GeneralService,
    private _usuarioService:UsuarioService,
    private translate: TranslateService,

  ) {
    this.translate.setDefaultLang(environment.languaje);
   }
   consultarUsuarioDisponible(){
     if(this.data.primerNombre.length>0 && this.data.primerApellido.length>0 && this.esCreacion==true)
        this.getConsultarUsuarioDisponible();
   }

   ngOnChanges(){
    if(this.data.secuenciaPais!=undefined 
      && this.data.secuenciaPais!=null 
      && this.data.secuenciaPais!=0){
      this.getProvincia();
    }

    if(this.data.fechaNacimiento!=null){
      this.consultarEdad();
    }
   }

   /**
    * @description: Consulta la edad según la fecha de nacimiento 
    * 
    * @author: Bryan Zamora
    * @param:  fechaNaciemiento
    * 
    */
   consultarEdad(){
    this._generalService.getConsultarEdad(this.data.fechaNacimiento).subscribe(
      Response=>{
        this.data.edad=Response.data.edad;
      },
      error=>{
        console.log(error.error.message);
      }
    ); 
   }

   /**
    * @description: Consulta los usuarios disponibles 
    * 
    * @author: Bryan Zamora
    * @param:  primerNombre
    * @param:  segundoNombre
    * 
    */
   getConsultarUsuarioDisponible(){
    this._usuarioService.getConsultarUsuarioDisponible(this.data.primerNombre,this.data.segundoNombre,this.data.primerApellido,this.data.segundoApellido).subscribe(
      Response=>{
        this.data.usuario=Response.data.usuarioDisponible;
      },
      error=>{
        console.log(error.error.message);
      }
    ); 
   }

   photo:File=null;
   @Input() data=
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
  }

  ngOnInit(): void {
    this.getTipoIdentificacion();
    this.getGenero();
    this.getPais();
  }

  setNumeroIdentificacion(numeroIdentificacion){
    this.data.numeroIdentificacion=numeroIdentificacion;
  }
  setPrimerNombre(primerNombre){
    this.data.primerNombre=primerNombre;
  }
  setSegundoNombre(segundoNombre){
    this.data.segundoNombre=segundoNombre;
  }
  setPrimerApellido(primerApellido){
    this.data.primerApellido=primerApellido;
  }

  setSegundoApellido(segundoApellido){
    this.data.segundoApellido=segundoApellido;
  }

  setEmail(email){
    this.data.email=email;
  }

  setUsuario(usuario){
    this.data.usuario=usuario;
  }

  setEdad(edad){
    this.data.edad=edad;
  }

  setDireccion(direccion){
    this.data.direccion=direccion;
  }

  setTelefonoFijo(telefonoFijo){
    this.data.telefonoFijo=telefonoFijo;
  }

  setTelefonoMovil(telefonoMovil){
    this.data.telefonoMovil=telefonoMovil;
  }

  setSecuenciaPais(secuenciaPais){
    console.log(secuenciaPais);
    this.data.secuenciaPais=secuenciaPais;
    this.getProvincia();
  }

  setSecuenciaProvincia(secuenciaProvincia){
    this.data.secuenciaProvincia=secuenciaProvincia;
    this.getCiudad();
  }

  setSecuenciaCiudad(secuenciaCiudad){
    this.data.secuenciaCiudad=secuenciaCiudad;
  }

  setSecuenciaTipoIdentificacion(secuenciaTipoIdentificacion){
    this.data.secuenciaTipoIdentificacion=secuenciaTipoIdentificacion;
  }

  setSecuenciaGenero(secuenciaGenero){
    this.data.secuenciaGenero=secuenciaGenero;
  }

  setFechaNacimiento(fechaNacimiento){
    this.data.fechaNacimiento=fechaNacimiento;
  }


  
  public tipoIdentificacion:any=[
                    {
                      secuenciaTipoIdentificacion:0,
                      nombre:""
                   }
                ];
  public genero:any=[
                    {
                      secuenciaGenero:0,
                      nombre:"",
                      descripcionGenero:""
                    }
              ];

  /**
     * @author Bryan Zamora
     * @description Consulta los tipos de identificacion
     * 
     */
  getTipoIdentificacion(){
    this._generalService.getTipoIdentificacion().subscribe(
        Response=>{
          this.tipoIdentificacion=Response.data;

          this.tipoIdentificacion.forEach(function(e) {
            e.id=e.secuenciaTipoIdentificacion;
          });
        },
        error=>{
          console.log(error.error.message);
        }
    ); 
  }

    /**
     * @author Bryan Zamora
     * @description Consulta los generos
     */
    getGenero(){
      this._generalService.getGenero().subscribe(
          Response=>{
            this.genero=Response.data;

            this.genero.forEach(element => {
              if(element.nombre=='M'){
                element.nombre="Masculino";
              }else{
                element.nombre="Femenino";
              }

              element.id=element.secuenciaGenero;
            });
          },
          error=>{
            console.log(error.error.message);
          }
      ); 
    }

     /**
     * @author Bryan Zamora
     * @description Consulta el pais
     */
     pais=[];
     secuenciaPais=0;
     secuenciaProvincia=0;
    getPais(){
      this._generalService.getPais().subscribe(
          Response=>{
            this.pais=Response.data;

            this.pais.forEach(function(e) {
              e.id=e.secuenciaPais;
            });

          },
          error=>{
            console.log(error.error.message);
          }
      ); 
    }

     /**
     * @author Bryan Zamora
     * @description Consulta la provincia segun el pais
     */
    provincia=[];
    getProvincia(){
      this._generalService.getProvincia(this.data.secuenciaPais).subscribe(
          Response=>{
            this.provincia=Response.data;
            this.provincia.forEach(function(e) {
              e.id=e.secuenciaProvincia;
            });
            this.getCiudad();
          },
          error=>{
            console.log(error.error.message);
          }
      ); 
    }

     /**
     * @author Bryan Zamora
     * @description Consulta las ciudades segun el pais y la provincia
     */
    ciudad=[];
    getCiudad(){
      this._generalService.getCiudad(this.data.secuenciaPais,this.data.secuenciaProvincia).subscribe(
          Response=>{
            this.ciudad=Response.data;
            this.ciudad.forEach(function(e) {
              e.id=e.secuenciaCiudad;
            });
          },
          error=>{
            console.log(error.error.message);
          }
      ); 
    }
}
