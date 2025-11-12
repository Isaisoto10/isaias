import { Galeria } from '../galeria/galeria';

export class Consola {
  productosConsola: any[]; // declarás la variable

  constructor() {
    const galeria = new Galeria();
    this.productosConsola = galeria.productos.filter(
      (p) => p.categoria === 'ps4' || p.categoria === 'ps5'
    );
  }
}
