// Archivo: app.config.ts
// Descripción:
//   Configuración de la aplicación: proporciona listeners y las rutas al bootstrap.

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Manejadores globales de errores del navegador.
    provideBrowserGlobalErrorListeners(),

    // Optimiza la detección de cambios agrupando eventos.
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Registrar las rutas de la aplicación.
    provideRouter(routes)
  ]
};