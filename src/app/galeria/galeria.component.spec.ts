import { NavbarComponent } from './../navbar/navbar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GaleriaComponent } from './galeria.component';

describe('GaleriaComponent', () => {
  let component: GaleriaComponent;
  let fixture: ComponentFixture<GaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaleriaComponent, NavbarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe existir GaleriaComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Debe ser llamado "cambiarCategoria" con la categoria "perro" emitida por el evento', () => {
    spyOn(component, 'cambiarCategoria');
    const navbarComponent = fixture.debugElement.query(By.directive(NavbarComponent));
    const navbar = navbarComponent.componentInstance;
    navbar.tipoCategoria.emit('perro');
    expect(component.cambiarCategoria).toHaveBeenCalledWith('perro');
  });
});
