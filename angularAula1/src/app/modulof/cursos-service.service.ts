import { Injectable } from '@angular/core';

@Injectable()
export class CursosServiceService {
getCursos(){
  return ['Java','C++','C#','JavaScrypt'];  
}
  constructor() { }

}
