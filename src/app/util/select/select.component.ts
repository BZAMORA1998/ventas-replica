import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  @Input() data:any;
  @Output() id=new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  actualizarSelect(secuencia){
    this.id.emit(secuencia);
    if(secuencia==0){
      $("select").removeClass("border-blue");
      $("select").addClass("border-red");
    }else{
      $("select").removeClass("border-red");
      $("select").addClass("border-blue");
    }
  }

}
