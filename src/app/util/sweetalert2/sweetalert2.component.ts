import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweetalert2',
  templateUrl: './sweetalert2.component.html',
  styleUrls: ['./sweetalert2.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class Sweetalert2Component implements OnInit {

  constructor(
    private _router:Router
  ) { 
  }

  ngOnInit(): void {
  }

  /**
   * @author Bryan Zamora 
   * @description Loading
   * @param activar 
   */
   loading(activar: any){
    Swal.fire({
      background: 'none',
      didOpen: () => {
        Swal.showLoading()
      } 
    });

    if(!activar){
      Swal.close();
    }
  }



  showModalError(message:any){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      confirmButtonColor:'#007bff',
    })
  }

  public showModalConfirmacion(message: any,url: any){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      confirmButtonColor:'#007bff',
      showConfirmButton: true,
    }).then((result) => {
      if (result.value) {
        if(url!=null){
         this.redirigir(url);
        }
      }
     });
  }

  public redirigir(url:any){
    return this._router.navigate([url]);
  }

}
