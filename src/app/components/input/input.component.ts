import { Component, OnInit, Input } from '@angular/core';
// import { InputService } from 'src/app/sevices/input.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  @Input() type : string
  @Input() placeholder : string
  @Input() value: string
  constructor() { }

  ngOnInit() {
  }
  
  send(){
  }
}
