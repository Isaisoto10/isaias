import { Routes } from '@angular/router';
import { Home } from './pages/home/home'
import { Galeria } from './pages/galeria/galeria';
import { Contacto } from './pages/contacto/contacto';
import { Ofertas } from './pages/ofertas/ofertas';
import { Categorias } from './pages/categorias/categorias';
import { Agregar } from './pages/agregar/agregar';
import { Nosotros } from './pages/nosotros/nosotros';
import { Consola } from './pages/consola/consola';
import { Pc } from './pages/pc/pc';
import { Carousel } from './pages/carousel/carousel';
import { Preguntas } from './pages/preguntas/preguntas';

export const routes: Routes = [
{path: "", component: Home },
{path:'home', component: Home },
{path :'galeria', component: Galeria},
{path: 'contacto', component: Contacto},
{path: 'ofertas', component: Ofertas},
{path: 'categorias', component: Categorias},
{path: 'agregar', component: Agregar},
{path: 'nosotros', component: Nosotros},
{path: 'consola', component: Consola},
{path: 'pc', component: Pc },
{path: 'carousel', component: Carousel },
{path: 'preguntas', component: Preguntas }
]






