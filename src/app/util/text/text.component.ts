import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor() { }
  @Input() label: string;
  @Input() icon: string;
  @Input() id: string="text";
  @Input() textInt:string="";
  @Input() typeInput:string="text"
  @Output() textOut=new EventEmitter<string>();
  @Input() inactivar:Boolean=false;
  
  ngOnInit(): void {
  }

  ngOnChanges(){
    this.onFocusEvent();
    this.onFocusOutEvent();
  }

  setText() {
    this.textOut.emit(this.textInt);
  }
  onFocusEvent(){
      $(`#textoF-${this.id}`).css("margin-top",-20);
      $(`#textoI-${this.id}`).css("border-bottom","1px solid blue");
      $(`#textoF-${this.id}`).css("font-size","12px");
  }
  onFocusOutEvent(){
    if(this.textInt==null || this.textInt==""){
      $(`#textoF-${this.id}`).css("margin-top",0);
      $(`#textoI-${this.id}`).css("border-bottom","1px solid red");
      $(`#textoF-${this.id}`).css("font-size","13px");
    }
  }
}
