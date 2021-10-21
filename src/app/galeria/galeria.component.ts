import { ImagenService } from './../services/imagen.service';
import { Component, OnInit } from '@angular/core';
import { GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  imagenes: GalleryItem[] = [];
  galleryId = 'myLightbox';

  constructor(private imagenService: ImagenService) {
  }

  ngOnInit() {
    this.cargarImagenes();
  }

  cargarImagenes() {
    this.imagenes = this.imagenService.obtenerImagenes();
    this.imagenService.cargarImagenesEnGaleria();
  }

  cambiarCategoria($event: string) {
    this.imagenes = this.imagenService.obtenerCategoria($event);
    this.imagenService.cargarImagenesEnGaleria();
  }

}