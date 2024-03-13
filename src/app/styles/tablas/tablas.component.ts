import { Component } from '@angular/core';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrl: './tablas.component.css'
})
export class TablasComponent {

  constructor(){}

  editarFila(event:any) {
    console.log('Editando fila...');
  }
  configurarFila(event: any) {
    console.log('Configurando fila...');
  }

  eliminarFila(event: any) {
    console.log('Eliminando fila...');
  }
}
