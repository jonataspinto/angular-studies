import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from 'src/app/sevices/nav.service';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from 'src/app/containers/home/home.component';
import { ContactComponent } from 'src/app/containers/contact/contact.component';
import { AboutComponent } from 'src/app/containers/about/about.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule    
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent
  ],
  providers: [
    NavService
  ]
})
export class FeatureModule { }
