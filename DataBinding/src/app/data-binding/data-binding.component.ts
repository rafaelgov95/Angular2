import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url:string = "Minha Casa Minha Vida Um dia Qm sabe";
  CursoTop:boolean= true;
  NomeDoCurso="Curso do Angular2"
  urlImagen = "https://bbvaopen4u.com/sites/default/files/img/embed/new/bbva-open4u-librerias-javascript-codigo-sin-comprimir.png"
  ValorAtual:string;
  ValorSalvo:string;
  IsMouseOver:boolean;
  valorInicial:number=15;  
  pessoa = {nome:'',idade:20 }
  
  getData(){
    return 1;
  }
  Click(){
    alert("Jessica Te amo Coração")
  }
  getCurtirCurso(){
   return true;
  }
  KeyUP(value:KeyboardEvent){
    console.log((<HTMLInputElement>value.target).value)
    this.ValorAtual=(<HTMLInputElement>value.target).value;
    // value.int
  }
  SalvarValor(valor){
    this.ValorSalvo =valor;

  }
  onMouseOut(){
    this.IsMouseOver= !this.IsMouseOver;
  }
  onModouValor(evento) {
    console.log(evento)
  }
  constructor() {
  }

  ngOnInit() {
  }

}
