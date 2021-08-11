import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:String="";
  contrasena:String="";

  constructor() { 
    
  }

  ngOnInit(): void {
    $("#usuario").focus(function() {
      $("#usuarioF").css("margin-top",-20);
      $("#usuario").css("border-bottom","1px solid red");
      $("#usuarioF").css("font-size","13px");
    });
     $("#usuario").blur(() => {
        if(this.usuario==""){
            $("#usuarioF").css("margin-top",0);
            $("#usuario").css("border-bottom","1px solid blue");
            $("#usuarioF").css("font-size","15px");
        }
    });

    $("#contrasena").focus(function() {
      $("#contrasenaF").css("margin-top",-20);
      $("#contrasena").css("border-bottom","1px solid red");
    }).blur(() => {
        if(this.contrasena==""){
            $("#contrasenaF").css("margin-top",0);
            $("#contrasena").css("border-bottom","1px solid blue");
        }
    });
  }

}
