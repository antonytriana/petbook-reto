import { TestBed } from '@angular/core/testing';

import { ImagenService } from './imagen.service';

describe('ImagenService', () => {
  let service: ImagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenService);
  });

  it('Debe existir ImagenService', () => {
    expect(service).toBeTruthy();
  });

  describe('obtenerImagenes', () => {
    it('Debe retornar todas las imagenes', () => {
      const imagenes = service.obtenerImagenes()
      expect(imagenes.length).toEqual(12);
    });
  });

  describe('obtenerCategoria', () => {
    it('Debe retornar la categoria de perro', () => {
      const categoria = service.obtenerCategoria('perro');
      expect(categoria.length).toBeGreaterThan(0);
    });

    it('Debe retornar la categoria de mascotas', () => {
      const categoria = service.obtenerCategoria('mascotas');
      expect(categoria.length).toBeGreaterThan(0);
    });

    it('Debe retornar indefinido si se busca una categoria que NO existe', () => {
      const categoria = service.obtenerCategoria('pez');
      expect(categoria.length).toEqual(0);
    });
  });

  describe('cargarImagenesEnGaleria', () => {
    it('Debe cargar las imagenes en la galeria', () => {
      const imagenes = service.obtenerImagenes();
      const galleryRef = service.cargarImagenesEnGaleria();
      galleryRef.state.subscribe(result => { 
        expect(result.items?.length).toBeGreaterThan(0);
      })
    });

    it('Debe retornar items vacios si las imagenes no se cargan en la galeria', () => {
      const galleryRef = service.cargarImagenesEnGaleria();
      galleryRef.state.subscribe(result => { 
        expect(result.items?.length).toEqual(0);
      })
    });
  });
});
