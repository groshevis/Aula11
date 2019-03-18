import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


      valor1 : number = 0;
      valor2 : number = 0;
      valor3 : number = 0;


  somar():void{

    let resul1= Number(this.valor1) ;
    let result2=Number(this.valor2) ;
    let result3=Number(this.valor3);

    if(resul1>result2>result3){
      alert("O número " +this.valor1+ "é o maior")
    }
    else if(result2>resul1>result3){
        alert("O numero " + this.valor2+" é o maior")
    }
    else
    {
        alert("O numero "+ this.valor3 +" é o maior")
    }




  }

}
