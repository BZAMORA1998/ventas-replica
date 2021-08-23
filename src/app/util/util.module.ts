import { CommonModule } from '@angular/common';
import { Sweetalert2Component } from './sweetalert2/sweetalert2.component';
import { FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import { PaginadorComponent } from './paginador/paginador.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TextComponent } from './text/text.component';
import { SelectComponent } from './select/select.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: 
  [
    Sweetalert2Component,
    PaginadorComponent,
    TextComponent,
    SelectComponent,
    DateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbPaginationModule,    
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })  
  ],
  entryComponents:[
    Sweetalert2Component,
    PaginadorComponent,
    TextComponent,
    SelectComponent,
    DateComponent
  ],
  exports:[
    Sweetalert2Component,
    PaginadorComponent,
    TextComponent,
    SelectComponent,
    DateComponent
  ]
})
export class UtilModule { }
