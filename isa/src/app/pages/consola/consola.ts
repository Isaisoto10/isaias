/* Archivo: consola.ts
   Descripción:
     Componente de la sección "Consola".
     Muestra una lista de juegos para consolas (PS4/PS5).
     Comentarios en español sencillo para entender cada parte.
*/

import { Component, signal } from '@angular/core';
// Component: marca este archivo como componente de Angular.
// signal: se importa pero no se usa aquí (se puede quitar si no se necesita).

import { CommonModule } from '@angular/common';
// CommonModule: trae directivas básicas (ngIf, ngFor, etc.) que puede usar la plantilla.

import { Juegos } from '../../models/juegos';
// Juegos: interfaz/modelo que describe cada producto (imagen, titulo, precio, categoria).

@Component({
  selector: 'app-root',
  // selector: nombre HTML para usar este componente en las plantillas.
  imports: [CommonModule],
  // imports: módulos que necesita la plantilla (aquí CommonModule para ngFor, etc.).
  templateUrl: './consola.html',
  // templateUrl: archivo HTML con la vista de este componente.
  styleUrls: ['./consola.css']
  // styleUrls: archivo(s) CSS con los estilos del componente.
})
export class Consola {
  // productos: lista de juegos que la plantilla mostrará.
  public productos: Juegos[]; 

  constructor() {
    // Inicializa la lista de productos con ejemplos.
    // Cada objeto tiene: imagen (ruta al asset), titulo (nombre), precio (número), categoria (ps4/ps5).
    this.productos = [
      {
        imagen: '../../../assets/spidermanps5.png',
        titulo: 'Marvel´s SpiderMan Remastered PS5',
        precio: 30000.0,
        categoria: 'ps5'
      },
      {
        imagen: '../../../assets/PS43.png',
        titulo: 'The Last of Us Remastered PS4 Offline',
        precio: 7500,
        categoria: 'ps4'
      },
      {
        imagen: '../../../assets/PS513.png',
        titulo: 'Silent Hill 2 PS5 Offline',
        precio: 20100,
        categoria: 'ps5'
      },
      {
        imagen: '../../../assets/wukong.jpg',
        titulo: 'Black Myth: Wukong PS5 Offline',
        precio: 20448,
        categoria: 'ps5'
      },
      {
        imagen: '../../../assets/fc25.png',
        titulo: 'Ea Sports Fc 25 PS5 Offline',
        precio: 10999,
        categoria: 'ps5'
      },
      {
        imagen: '../../../assets/nba.png',
        titulo: 'NBA 2K25 PS4 Offline',
        precio: 15480,
        categoria: 'ps4'
      },
      {
        imagen: '../../../assets/horizonps5.png',
        titulo: 'Horizon Forbidden West PS5 Offline',
        precio: 16140,
        categoria: 'ps5'
      },
      {
        imagen: '../../../assets/residentevil.png',
        titulo: 'Resident Evil 4 Remake PS5',
        precio: 39999,
        categoria: 'ps5'
      },
      {
        imagen: '../../../assets/eldenringshadown.png',
        titulo: 'Elden Ring Shadow of the Erdtree Edition PS4 Offline',
        precio: 17376,
        categoria: 'ps4'
      }
    ];
  }
   
  // selectCard guarda el juego seleccionado para mostrar más info si se desea.
  selectCard: any = null;

  // verMasInformacion: guarda en selectCard el juego pasado como argumento.
  // La plantilla puede llamar a este método cuando el usuario pide ver más detalles.
  verMasInformacion(juego: Juegos) {
    this.selectCard = juego;
  }

}