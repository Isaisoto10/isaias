/* Archivo: app.routes.ts
   Descripción:
     Define las rutas de la aplicación (qué componente se muestra según la URL).
     Comentarios sencillos en español para entender cada import y cada ruta.
*/

import { Routes } from '@angular/router';
// Rutas de Angular: tipo usado para declarar la lista de rutas.

import { Home } from './pages/home/home';
// Componente para la página principal (Home).

import { Galeria } from './pages/galeria/galeria';
// Componente que muestra la galería de productos.

import { Contacto } from './pages/contacto/contacto';
// Componente con el formulario o información de contacto.

import { Ofertas } from './pages/ofertas/ofertas';
// Componente que muestra las ofertas/promociones.

import { Categorias } from './pages/categorias/categorias';
// Componente que lista las categorías de productos.

import { Agregar } from './pages/agregar/agregar';
// Componente para añadir un nuevo producto (formulario).

import { Nosotros } from './pages/nosotros/nosotros';
// Componente con información sobre la empresa / el equipo.

import { Consola } from './pages/consola/consola';
// Componente que muestra productos de consolas.

import { Pc } from './pages/pc/pc';
// Componente que muestra productos para PC.

import { Preguntas } from './pages/preguntas/preguntas';
// Componente de preguntas frecuentes (FAQ).

export const routes: Routes = [
  // Ruta por defecto (cuando la URL está en la raíz) muestra Home.
  { path: "", component: Home },

  // Ruta explícita a Home (ej. /home).
  { path: 'home', component: Home },

  // Ruta para la galería de productos (ej. /galeria).
  { path: 'galeria', component: Galeria },

  // Ruta para la página de contacto (ej. /contacto).
  { path: 'contacto', component: Contacto },

  // Ruta para la página de ofertas (ej. /ofertas).
  { path: 'ofertas', component: Ofertas },

  // Ruta para ver categorías (ej. /categorias).
  { path: 'categorias', component: Categorias },

  // Ruta para añadir productos (ej. /agregar).
  { path: 'agregar', component: Agregar },

  // Ruta sobre nosotros (ej. /nosotros).
  { path: 'nosotros', component: Nosotros },

  // Ruta para consolas (ej. /consola).
  { path: 'consola', component: Consola },

  // Ruta para PC (ej. /pc).
  { path: 'pc', component: Pc },

  // Ruta de preguntas frecuentes (ej. /preguntas).
  { path: 'preguntas', component: Preguntas }
];