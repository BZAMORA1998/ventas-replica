import { Component, Input, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  actualizarSelect(secuencia){
    console.log(secuencia);
    if(secuencia==0){
      $("select").removeClass("border-blue");
      $("select").addClass("border-red");
    }else{
      $("select").removeClass("border-red");
      $("select").addClass("border-blue");
    }
  }

  data:any=[
    {
    "secuencia":1,
    "nombre":"Todos"
    },
    {
      "secuencia":2,
      "nombre":"Activos"
    },
    {
      "secuencia":3,
      "nombre":"Inactivos"
    }
  ];

  

}
