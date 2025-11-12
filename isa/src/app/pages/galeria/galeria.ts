import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Juegos } from '../../models/juegos';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})

export class Galeria {
  public productos: Juegos[]; 
  constructor() {
    this.productos = [

    {
      imagen: '../../../assets/digimon.png',
      titulo: 'Digimon Story Time Stranger Ultimate Edition PC Steam',
      precio: 8.499,
      categoria: 'pc'
    },
    {
      imagen: '../../../assets/sekiro.png',
      titulo: 'Sekiro: Shadows Die Twice PC Edition',
      precio: 1.2999,
      categoria: 'pc'
    },
    {
      imagen: '../../../assets/eldenring2.png',
      titulo: 'Elden Ring Deluxe Edition PC Steam',
      precio: 5.599,
      categoria: 'pc'
    },
    {
      imagen: '../../../assets/gow.png',
      titulo: 'God Of War PC Edition',
      precio: 5.199,
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
      precio: 7.500,
      categoria: 'ps4'
    },
    {
      imagen: '../../../assets/PS513.png',
      titulo: 'Silent Hill 2 PS5 Offline',
      precio: 20.100,
      categoria: 'ps5'
    },
    {
      imagen: '../../../assets/fc26.png',
      titulo: 'Ea Sports Fc 26 PC Steam',
      precio: 10.999,
      categoria: 'pc'
    },
    {
      imagen: '../../../assets/pvz.png',
      titulo: 'Plants vs. Zombies: Replanted PC Steam',
      precio: 3.999,
      categoria: 'pc'
    },
    {
      imagen: '../../../assets/dispatch.png',
      titulo: 'Dispatch Deluxe Edition PC Steam',
      precio: 3.350,
      categoria: 'pc'
    },
    {
      imagen: '../../../assets/sparkingzero.png',
      titulo: 'Dragon Ball: Sparking! Zero Ultimate Edition PC Steam',
      precio: 5.999,
      categoria: 'pc'
    },
    {
      imagen: '../../../assets/thelastofus2.png',
      titulo: 'The Last of Us Parte II Remastered PC Steam',
      precio: 7.500,
      categoria: 'pc'
    },
    {
      imagen: '../../../assets/wukong.jpg',
      titulo: 'Black Myth: Wukong PS5 Offline',
      precio: 20.448,
      categoria: 'ps5'
    },
    {
      imagen: '../../../assets/fc25.png',
      titulo: 'Ea Sports Fc 25 PS5 Offline',
      precio: 10.999,
      categoria: 'ps5'
    },
    {
      imagen: '../../../assets/nba.png',
      titulo: 'NBA 2K25 PS4 Offline',
      precio: 15.480,
      categoria: 'ps4'
    },
    {
      imagen: '../../../assets/horizonps5.png',
      titulo: 'Horizon Forbidden West PS5 Offline',
      precio: 16.140,
      categoria: 'ps5'
    },
    {
      imagen: '../../../assets/residentevil.png',
      titulo: 'Resident Evil 4 Remake PS5',
      precio: 39.999,
      categoria: 'ps5'
    },
    {
      imagen: '../../../assets/eldenringshadown.png',
      titulo: 'Elden Ring Shadow of the Erdtree Edition PS4 Offline',
      precio: 17.376,
      categoria: 'ps4'
    }
  ];
   }
   
   selectCard: any = null
   verMasInformacion(juego: Juegos) {
    this.selectCard = juego;
   }

}
