import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public activeLang = 'es';
  constructor(private _translate: TranslateService) 
  {
    this.activeLang=localStorage.getItem("languaje");
    this._translate.setDefaultLang(this.activeLang);
  }

  mostrarPag=true;
  perPage=10;
  totalRows=100;
  ngOnInit(): void {
  }
  getpaginacion(data){

  }

  setUsuario(text){
    console.log("data: "+text);
  }
}
