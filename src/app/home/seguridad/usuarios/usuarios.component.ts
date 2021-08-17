import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() { }

  mostrarPag=true;
  perPage=10;
  totalRows=100;
  ngOnInit(): void {
  }
  getpaginacion(data){

  }
}
