import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylesRoutingModule } from './styles-routing.module';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TablasComponent } from './tablas/tablas.component';
import { ModalesComponent } from './modales/modales.component';



@NgModule({
  declarations: [
    HomeComponent,
    FormularioComponent,
    TablasComponent,
    ModalesComponent,
  ],
  imports: [
    CommonModule,
    StylesRoutingModule
  ]
})
export class StylesModule { }
