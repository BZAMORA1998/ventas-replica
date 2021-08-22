import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

    page= 1;
    totalPaginas;



    @Input() totalDatos;
    @Input() datosPorpagina;

    @Output() paginaSeleccionada:EventEmitter<Number>;

  constructor() { 
    this.paginaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onPageChange(page){
      this.paginaSeleccionada.emit(page);
  }

}
