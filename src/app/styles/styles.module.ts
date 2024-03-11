import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylesRoutingModule } from './styles-routing.module';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    HomeComponent,
    FormularioComponent,
  ],
  imports: [
    CommonModule,
    StylesRoutingModule
  ]
})
export class StylesModule { }
