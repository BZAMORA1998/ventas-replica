import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModulosService } from 'src/app/service/modulos.service';
import { Sweetalert2Component } from 'src/app/util/sweetalert2/sweetalert2.component';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  constructor( private _translate: TranslateService, private _modulosService: ModulosService,private _sweetalert2Component: Sweetalert2Component ) { }

  ngOnInit(): void {
    this.getModulosPorUsuarios();
  }

  modulos: any[]

  /**
   * @author Bryan Zamora
   * @param incluirModulosNoParametrizados 
   * @description Autenticacion de usuario
   */
   getModulosPorUsuarios(){
    this._modulosService.getConsultarModulosPorUsuario(false,0).subscribe(
      Response=>{
          this.modulos=Response['data']
      },
      error=>{
          this._sweetalert2Component.showModalError(error.error.message);
        }
      );
    }

}
