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
  text:string="";
  @Output() texto=new EventEmitter<string>();
  
  ngOnInit(): void {
    $("#textoI").focus(function() {
      $("#textoF").css("margin-top",-10);
      $("#textoI").css("border-bottom","1px solid red");
      $("#textoF").css("font-size","12px");
    });
     $("#textoI").blur(() => {
        if(this.text==""){
            $("#textoF").css("margin-top",0);
            $("#textoI").css("border-bottom","1px solid blue");
            $("#textoF").css("font-size","13px");
        }
    });
  }

  setText() {
    this.texto.emit(this.text);
  }
}
