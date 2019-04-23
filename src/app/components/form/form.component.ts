import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/sevices/input.service';

import { TYPE } from '../../../theme/pt'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  type = TYPE;
  constructor(private inputService: InputService) {
  }

  ngOnInit() {
  }

  send(name, email){
    console.log(name.value, email.value);
  }
}
