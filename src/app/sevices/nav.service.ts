import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {


  constructor() { }

  routesNavigation(lang){
    return ['lang.HOME', 'lang.CONTACT', 'lang.ABOUT'];
  }
}
