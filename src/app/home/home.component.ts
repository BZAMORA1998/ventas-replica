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
  ngOnInit(): void {
    this.activeLang=localStorage.getItem("languaje");
    this._translate.setDefaultLang(this.activeLang);
    this.getModulosPorUsuarios();
  }

  /**
   * @author Bryan Zamora
   * @param incluirModulosNoParametrizados 
   * @description Autenticacion de usuario
   */
   modulos:any;
   seguridad=false;
   getModulosPorUsuarios(){
    this._modulosService.getConsultarModulosPorUsuario(false).subscribe(
      Response=>{
          this.modulos=Response['data']

          this.modulos.forEach(element => {
            console.log(element);
            if(element.mnemonico=="SEGURIDAD"){
              this.seguridad=true;
            }
          });

          console.log(this.seguridad);
          
      },
      error=>{
          this._sweetalert2Component.showModalError(error.error.message);
        }
      );
    }

}
