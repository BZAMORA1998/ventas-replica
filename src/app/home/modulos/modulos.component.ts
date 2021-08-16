import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  constructor( private _translate: TranslateService,) { }

  ngOnInit(): void {
  }

  modulos: any[] = [
    {
      "name": "SEGURIDAD",
      "registro":"11 REGISTRADA",
      "img":"fa fa-unlock fa-3x"
    },
    {
      "name": "PRODUCTOS",
      "registro":"11 REGISTRADA",
      "img":"fa fa-unlock fa-3x"
    },
    {
      "name": "COMPRAS",
      "registro":"11 REGISTRADA",
      "img":"fa fa-unlock fa-3x"
    },
    {
      "name": "VENTAS",
      "registro":"11 REGISTRADA",
      "img":"fa fa-unlock fa-3x"
    },
    {
      "name": "MOVIMIENTO DE CAJAS",
      "registro":"11 REGISTRADA",
      "img":"fa fa-unlock fa-3x"
    },
    {
      "name": "DEVOLUCIONES",
      "registro":"11 REGISTRADA",
      "img":"fa fa-unlock fa-3x"
    },
    {
      "name": "KARDEX",
      "registro":"11 REGISTRADA",
      "img":"fa fa-unlock fa-3x"
    },
    {
      "name": "REPORTES",
      "registro":"11 REGISTRADA",
      "img":"fa fa-unlock fa-3x"
    }
  ];

}
