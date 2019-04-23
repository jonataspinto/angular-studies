import { Injectable } from '@angular/core';

import { LANG } from '../../theme/pt'

@Injectable({
  providedIn: 'root'
})
export class NavService {
  Lang = LANG;
  constructor() { }

  routesNavigation(){
    let lang = this.Lang;
    return [lang.HOME, lang.CONTACT, lang.ABOUT];
  }
}
