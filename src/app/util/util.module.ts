import { CommonModule } from '@angular/common';
import { Sweetalert2Component } from './sweetalert2/sweetalert2.component';
import { FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import { PaginadorComponent } from './paginador/paginador.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: 
  [
    Sweetalert2Component,
    PaginadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbPaginationModule,    
    NgbModule
  ],
  entryComponents:[
    Sweetalert2Component,
    PaginadorComponent
  ],
  exports:[
    Sweetalert2Component,
    PaginadorComponent
  ]
})
export class UtilModule { }
