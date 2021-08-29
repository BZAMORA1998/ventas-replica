import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModulosService } from '../service/modulos.service';
import { Sweetalert2Component } from '../util/sweetalert2/sweetalert2.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public activeLang = 'es';
  constructor(private _translate: TranslateService,private _modulosService:ModulosService,private _sweetalert2Component :Sweetalert2Component) 
  {
  }

  dataUser:any=[];
  ngOnInit(): void {
    this.dataUser=JSON.parse(localStorage.getItem("data"));
    this.activeLang=localStorage.getItem("languaje");
    this._translate.setDefaultLang(this.activeLang);
    this.getModulosPorUsuarios();
    console.log("data: ",  this.dataUser);
  }

  /**
   * @author Bryan Zamora
   * @param incluirModulosNoParametrizados 
   * @description Autenticacion de usuario
   */
   modulos:any;
   seguridad=false;
   compras=false;
   ventas=false;
   reportes=false;
   productos=false;
   movimientos=false;
   kardex=false;
   devoluciones=false;
   getModulosPorUsuarios(){
    this._modulosService.getConsultarModulosPorUsuario(false,0).subscribe(
      Response=>{
          this.modulos=Response['data']

          this.modulos.forEach(element => {
            if(element.mnemonico=="SEGURIDAD"){
              this.seguridad=true;
            }else if(element.mnemonico=="COMPRAS"){
              this.compras=true;
            }else if(element.mnemonico=="VENTAS"){
              this.ventas=true;
            }else if(element.mnemonico=="REPORTES"){
              this.reportes=true;
            }else if(element.mnemonico=="PRODUCTOS"){
              this.productos=true;
            }else if(element.mnemonico=="MOVIMIENTOS_DE_CAJAS"){
              this.movimientos=true;
            }else if(element.mnemonico=="KARDEX"){
              this.kardex=true;
            }else if(element.mnemonico=="DEVOLUCIONES"){
              this.devoluciones=true;
            }
          });
      },
      error=>{
          this._sweetalert2Component.showModalError(error.error.message);
        }
      );
    }

}
