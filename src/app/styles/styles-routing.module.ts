import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColoresComponent } from './colores/colores.component';
import { TipografiaComponent } from './tipografia/tipografia.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TablasComponent } from './tablas/tablas.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'colores',
        component: ColoresComponent
      },
      {
        path: 'tipografia',
        component:TipografiaComponent
      },
      {
        path: 'formulario',
        component: FormularioComponent
      },
      {
        path:'tablas',
        component:TablasComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StylesRoutingModule { }
