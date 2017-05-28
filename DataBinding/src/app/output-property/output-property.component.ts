import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;
  @Output() modouValor = new EventEmitter();
  decrementa() {
    this.valor--;
    this.modouValor.emit({ NovoValor: this.valor })
  }
  encrementa() {
    this.valor++;
    this.modouValor.emit({ NovoValor: this.valor })
  }
  onModouValor(evento) {
    console.log(evento)
  }
  constructor() { }

  ngOnInit() {
  }

}
