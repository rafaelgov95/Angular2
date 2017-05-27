import { Component, OnInit } from '@angular/core';
import { CursosServiceService } from '../cursos-service.service';
@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {
 nomePortal:any ;
 cursos:string[];
  constructor(private cursoS:CursosServiceService) { 
    // this.nomePortal ="http://estaqui.ddns.net";
    // this.cursos=['Java','C++','C#','JavaScrypt']
    // var service = new CursosServiceService();
    this.cursos = this.cursoS.getCursos();
  }
  ngOnInit() {
  }

}
