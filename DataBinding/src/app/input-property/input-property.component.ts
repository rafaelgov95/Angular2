import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs:['nomeCurso']

})
export class InputPropertyComponent implements OnInit {
// @Input() NomeDoCurso:string=''
  // @Input('nome') 
  nomeCurso:string = ''
  constructor() { }

  ngOnInit() {
  }

}
