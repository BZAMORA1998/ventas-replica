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
  selected:String='es';
  langArray:any;

  constructor() { 
    
  }

  typeInputF="password";
   showPF:boolean=true;
    mostrarPassword(){
  
      if(this.typeInputF=="text"){
        this.showPF=true;
        this.typeInputF="password";
      }else{
        this.showPF=false;
        this.typeInputF="text";
      }
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

    //test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
$('.vodiapicker option').each((a:any) =>{
  var img = $(a).attr("data-thumbnail");
  var text = a.innerText;
  var value = $(a).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  this.langArray.push(item);
})

$('#a').html(this.langArray);

//Set the button value to the first el of the array
$('.btn-select').html(this.langArray[0]);
$('.btn-select').attr('value', 'en');

//change button stuff on click
$('#a li').click(function(resp:any){
   var img = $(resp).find('img').attr("src");
   var value = $(resp).find('img').attr('value');
   var text = resp.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".b").toggle();
  //console.log(value);
});

$(".btn-select").click(function(){
        $(".b").toggle();
    });

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  //find an item with value of sessionLang
  var langIndex = this.langArray.indexOf(sessionLang);
  $('.btn-select').html(this.langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = this.langArray.indexOf('ch');
  console.log(langIndex);
  $('.btn-select').html(this.langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}



  }

}
