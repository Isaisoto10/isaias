/* Archivo: pc.ts
   Descripción:
     Componente de la sección "PC". Muestra una lista de juegos para PC.
     Comentarios en español sencillo para entender qué hace cada parte.
*/

import { Component, signal } from '@angular/core';
// Component: sirve para definir este archivo como un componente de Angular.
// signal: importado pero no se usa aquí (se puede eliminar si no se necesita).

import { CommonModule } from '@angular/common';
// CommonModule trae directivas básicas de Angular para la plantilla.

import { Juegos } from '../../models/juegos';
// Importa la interfaz o modelo 'Juegos' que describe cada producto.

/* Decorador del componente:
   - selector: nombre HTML para usar este componente.
   - imports: módulos que necesita (CommonModule en este caso).
   - templateUrl: archivo HTML que contiene la vista.
   - styleUrls: archivo(s) CSS con los estilos del componente.
*/
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './pc.html',
  styleUrls: ['./pc.css']
})
export class Pc {
  // Lista de productos que mostrará la plantilla.
  public productos: Juegos[]; 

  constructor() {
    // Aquí inicializamos la lista con varios juegos para PC.
    // Cada objeto tiene: imagen (ruta), titulo (nombre), precio (número) y categoria (texto).
    this.productos = [
      {
        imagen: '../../../assets/digimon.png',
        titulo: 'Digimon Story Time Stranger Ultimate Edition PC Steam',
        precio: 8499,
        categoria: 'pc'
      },
      {
        imagen: '../../../assets/sekiro.png',
        titulo: 'Sekiro: Shadows Die Twice PC Edition',
        precio: 12999,
        categoria: 'pc'
      },
      {
        imagen: '../../../assets/eldenring2.png',
        titulo: 'Elden Ring Deluxe Edition PC Steam',
        precio: 5599,
        categoria: 'pc'
      },
      {
        imagen: '../../../assets/gow.png',
        titulo: 'God Of War PC Edition',
        precio: 5199,
        categoria: 'pc'
      },
      {
        imagen: '../../../assets/fc26.png',
        titulo: 'Ea Sports Fc 26 PC Steam',
        precio: 10999,
        categoria: 'pc'
      },
      {
        imagen: '../../../assets/pvz.png',
        titulo: 'Plants vs. Zombies: Replanted PC Steam',
        precio: 3999,
        categoria: 'pc'
      },
      {
        imagen: '../../../assets/dispatch.png',
        titulo: 'Dispatch Deluxe Edition PC Steam',
        precio: 3350,
        categoria: 'pc'
      },
      {
        imagen: '../../../assets/sparkingzero.png',
        titulo: 'Dragon Ball: Sparking! Zero Ultimate Edition PC Steam',
        precio: 5999,
        categoria: 'pc'
      },
      {
        imagen: '../../../assets/thelastofus2.png',
        titulo: 'The Last of Us Parte II Remastered PC Steam',
        precio: 7500,
        categoria: 'pc'
      },
    ];
  }
  
  // Variable para guardar el juego seleccionado cuando el usuario pide ver más info.
  selectCard: any = null

  // Método simple que guarda el juego recibido en selectCard.
  // La plantilla puede llamar a este método para mostrar más detalles.
  verMasInformacion(juego: Juegos) {
    this.selectCard = juego;
  }

}