import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/sevices/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  navigation: any;

  constructor( private navService : NavService ) {
    this.navigation = this.navService.routesNavigation();
  }

  ngOnInit() {
  }

}
