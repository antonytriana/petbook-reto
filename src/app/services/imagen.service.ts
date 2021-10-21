import { Injectable } from '@angular/core';
import { ImageItem, GalleryItem, Gallery } from 'ng-gallery';

const IMAGENES = [
  new ImageItem({ src: 'assets/img/perro_1.jpg', thumb: 'assets/img/thumb/perro_1.jpg', type: 'perro' }),
  new ImageItem({ src: 'assets/img/perro_2.jpg', thumb: 'assets/img/thumb/perro_2.jpg', type: 'perro' }),
  new ImageItem({ src: 'assets/img/perro_3.jpg', thumb: 'assets/img/thumb/perro_3.jpg', type: 'perro' }),
  new ImageItem({ src: 'assets/img/erizo_1.jpg', thumb: 'assets/img/thumb/erizo_1.jpg', type: 'erizo' }),
  new ImageItem({ src: 'assets/img/erizo_2.jpg', thumb: 'assets/img/thumb/erizo_2.jpg', type: 'erizo' }),
  new ImageItem({ src: 'assets/img/erizo_3.jpg', thumb: 'assets/img/thumb/erizo_3.jpg', type: 'erizo' }),
  new ImageItem({ src: 'assets/img/caballo_1.jpg', thumb: 'assets/img/thumb/caballo_1.jpg', type: 'caballo' }),
  new ImageItem({ src: 'assets/img/caballo_2.jpg', thumb: 'assets/img/thumb/caballo_2.jpg', type: 'caballo' }),
  new ImageItem({ src: 'assets/img/caballo_3.jpg', thumb: 'assets/img/thumb/caballo_3.jpg', type: 'caballo' }),
  new ImageItem({ src: 'assets/img/gato_1.jpg', thumb: 'assets/img/thumb/gato_1.jpg', type: 'gato' }),
  new ImageItem({ src: 'assets/img/gato_2.jpg', thumb: 'assets/img/thumb/gato_2.jpg', type: 'gato' }),
  new ImageItem({ src: 'assets/img/gato_3.jpg', thumb: 'assets/img/thumb/gato_3.jpg', type: 'gato' })
];

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  imagenes: GalleryItem[] = []
  galleryId = 'myLightbox';

  constructor(private gallery: Gallery) { }

  obtenerImagenes() {
    this.imagenes = IMAGENES;
    return this.imagenes;
  }

  obtenerCategoria(categoria: string) {
    if (categoria === 'mascotas') {
      this.imagenes = IMAGENES;
    } else {
      this.imagenes = IMAGENES.filter(e => e.data.type === categoria)
    }
    return this.imagenes;
  }

  cargarImagenesEnGaleria() {
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.imagenes);
    return galleryRef;
  }
}
