import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from 'src/app/sevices/nav.service';
import { InputService } from 'src/app/sevices/input.service';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from 'src/app/containers/home/home.component';
import { ContactComponent } from 'src/app/containers/contact/contact.component';
import { AboutComponent } from 'src/app/containers/about/about.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { FormComponent } from 'src/app/components/form/form.component';
import { InputComponent } from 'src/app/components/input/input.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    FormComponent,
    InputComponent
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    FormComponent,
    InputComponent
  ],
  providers: [
    NavService,
    InputService,
    InputComponent
  ]
})
export class FeatureModule { }
