import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulofComponent } from './modulof.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import {CursosServiceService } from './cursos-service.service'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModulofComponent, CursoDetalhesComponent], 

  exports:[
     ModulofComponent,
     CursoDetalhesComponent
     ]
     ,providers:[
       CursosServiceService
     ]
})
export class ModulofModule { }
