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
   loading(activar: Boolean){
    Swal.fire({
      background: 'none',
      heightAuto: false,
      allowOutsideClick: false,
      showConfirmButton: false,
      html: '<img src="https://i.gifer.com/XVo6.gif" width="50" height="50">'
    })

    if(!activar){
      Swal.close();
    }
  }



  showModalError(message:any){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      heightAuto: false,
      text: message,
      confirmButtonColor:'#007bff',
    })
  }

  public showModalConfirmacion(message: any,url: any){
    Swal.fire({
      position: 'center',
      heightAuto: false,
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
