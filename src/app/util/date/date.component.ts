import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  @Input() dateInt:any;
  @Input() id: string="0";
  @Output() dateOut=new EventEmitter<any>();
  constructor() { }

  today:any;
  ngOnInit(): void {
 
  }

  actualizarDate(){
    this.dateOut.emit(this.dateInt);
  }

}
