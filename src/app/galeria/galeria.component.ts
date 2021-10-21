import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  images: GalleryItem[] = [];
  galleryId = 'myLightbox'
  constructor(private gallery: Gallery) {

  }

  ngOnInit() {
    this.images = [
      new ImageItem({ src: 'https://pixabay.com/get/g628ca371255cce1570c036d30d19829ba673b16bcafa7f28ede4b06fd0282cab4d3f8b065f6b656f62dfef182b44b004_640.jpg', thumb: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg' }),
      new ImageItem({ src: 'https://pixabay.com/get/g2d5d8f9d2805276172bcc09c6d1de3360fddac633f0d12f36111714b8693bcaa82a5cfaec4daec1b8a106fb0dfdb829e_640.jpg', thumb: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg' }),
      new ImageItem({ src: 'https://pixabay.com/get/g2d5d8f9d2805276172bcc09c6d1de3360fddac633f0d12f36111714b8693bcaa82a5cfaec4daec1b8a106fb0dfdb829e_640.jpg', thumb: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg' }),
      new ImageItem({ src: 'https://pixabay.com/get/g2d5d8f9d2805276172bcc09c6d1de3360fddac633f0d12f36111714b8693bcaa82a5cfaec4daec1b8a106fb0dfdb829e_640.jpg', thumb: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg' }),
      new ImageItem({ src: 'https://pixabay.com/get/g2d5d8f9d2805276172bcc09c6d1de3360fddac633f0d12f36111714b8693bcaa82a5cfaec4daec1b8a106fb0dfdb829e_640.jpg', thumb: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg' }),
      new ImageItem({ src: 'https://pixabay.com/get/g2d5d8f9d2805276172bcc09c6d1de3360fddac633f0d12f36111714b8693bcaa82a5cfaec4daec1b8a106fb0dfdb829e_640.jpg', thumb: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg' }),
      new ImageItem({ src: 'https://pixabay.com/get/g2d5d8f9d2805276172bcc09c6d1de3360fddac633f0d12f36111714b8693bcaa82a5cfaec4daec1b8a106fb0dfdb829e_640.jpg', thumb: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg' }),
      new ImageItem({ src: 'https://pixabay.com/get/g2d5d8f9d2805276172bcc09c6d1de3360fddac633f0d12f36111714b8693bcaa82a5cfaec4daec1b8a106fb0dfdb829e_640.jpg', thumb: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg' }),
      new ImageItem({ src: 'https://pixabay.com/get/g2d5d8f9d2805276172bcc09c6d1de3360fddac633f0d12f36111714b8693bcaa82a5cfaec4daec1b8a106fb0dfdb829e_640.jpg', thumb: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg' }),
      new ImageItem({ src: 'https://pixabay.com/get/g2d5d8f9d2805276172bcc09c6d1de3360fddac633f0d12f36111714b8693bcaa82a5cfaec4daec1b8a106fb0dfdb829e_640.jpg', thumb: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg' }),
      new ImageItem({ src: 'https://pixabay.com/get/g2d5d8f9d2805276172bcc09c6d1de3360fddac633f0d12f36111714b8693bcaa82a5cfaec4daec1b8a106fb0dfdb829e_640.jpg', thumb: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_150.jpg' }),
    ];
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.images);
  }
}
