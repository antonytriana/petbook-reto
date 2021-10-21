import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe existir NavbarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Debe emitirse el evento de perro hacer clic', () => {
    spyOn(component.tipoCategoria, 'emit');
 
    const elementoMascota = fixture.debugElement.query(By.css('#perro'));
    elementoMascota.triggerEventHandler('click', {});
 
    fixture.detectChanges();
    expect(component.tipoCategoria.emit).toHaveBeenCalledWith('perro');
 });
});
