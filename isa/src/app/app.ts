// Archivo: app.ts
// Descripción:
//   Componente principal de la aplicación, ordenado y formateado.
//   Comentarios sencillos para entender cada parte.

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,            // componente independiente (Angular standalone)
  imports: [RouterOutlet],     // módulos usados en la plantilla
  templateUrl: './app.html',   // archivo HTML de la vista
  styleUrls: ['./app.css']     // archivo(s) CSS del componente
})
export class App {
  // Título de la app como señal reactiva simple
  protected readonly title = signal('isa');
}