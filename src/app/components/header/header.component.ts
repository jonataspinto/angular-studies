import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/sevices/nav.service';

import { LANG } from '../../../theme/pt'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public lang = LANG;
  navigation: any;

  constructor( private navService : NavService ) {
    this.navigation = this.navService.routesNavigation(this.lang);
  }

  ngOnInit() {
    console.log(this.navigation)
  }

}
