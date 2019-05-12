import { Injectable } from '@angular/core';
import { InputComponent } from '../components/input/input.component';
// import { TYPE } from '../../theme/pt'


@Injectable({
  providedIn: 'root'
})
export class InputService {
  // type = TYPE;

  constructor(private inputComponent: InputComponent) { }

  // inputType(){
  //   return this.type.TEXT;
  // }

  
}
