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
  @Input() selected:any;
  @Output() id=new EventEmitter<any>();
  @Input() incluirSelect:boolean=true;  
  constructor() { }

  ngOnInit(): void {
    this.actualizarSelect();
  }

  actualizarSelect(){
    this.id.emit(this.selected);
    console.log("Id: ",this.selected);
    if(this.selected==undefined){
      $("select").removeClass("border-blue");
      $("select").addClass("border-red");
    }else{
      $("select").removeClass("border-red");
      $("select").addClass("border-blue");
    }
  }

}
