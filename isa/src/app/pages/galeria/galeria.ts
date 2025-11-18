// ...existing code...
/* Archivo: galeria.ts
   Descripción:
     Componente que muestra la galería de productos.
     Comentarios en español sencillo para entender qué hace cada parte.
*/

import { Component } from '@angular/core';
// Component: permite declarar este archivo como un componente de Angular.

import { CommonModule } from '@angular/common';
// CommonModule: trae directivas básicas (ngIf, ngFor, etc.) que usa la plantilla.

import { Juegos } from '../../models/juegos';
// Modelo/Interfaz que describe la forma de cada producto (imagen, título, precio, categoría).

@Component({
  selector: 'app-galeria',
  // selector: nombre HTML para usar este componente en plantillas.
  standalone: true,
  // standalone: componente independiente (no necesita NgModule).
  imports: [CommonModule],
  // imports: módulos que usa la plantilla (aquí CommonModule para ngFor).
  templateUrl: './galeria.html',
  // templateUrl: archivo HTML que contiene la vista de la galería.
  styleUrls: ['./galeria.css']
  // styleUrls: archivo(s) CSS con los estilos del componente.
})
export class Galeria {
  // productos: lista que contiene todos los juegos/productos a mostrar.
  public productos: Juegos[];

  constructor() {
    // Inicializamos la lista de productos con ejemplos.
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

  // selectCard guarda el producto seleccionado para, por ejemplo,
  // mostrar más detalles en la plantilla.
  selectCard: any = null;

  // verMasInformacion: método que setea selectCard con el juego recibido.
  // La plantilla puede llamar a este método cuando el usuario pide ver más info.
  verMasInformacion(juego: Juegos) {
    this.selectCard = juego;
  }
}
// ...existing code...