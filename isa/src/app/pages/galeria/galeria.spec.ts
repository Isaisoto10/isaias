import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Galeria } from './galeria';

describe('Galeria', () => {
  let component: Galeria;
  let fixture: ComponentFixture<Galeria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galeria] // importante: Galeria es standalone, así que va en imports
    })
    .compileComponents();

    fixture = TestBed.createComponent(Galeria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of productos', () => {
    expect(component.productos).toBeTruthy();
    expect(component.productos.length).toBeGreaterThan(0);
  });

  it('should render product titles in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const firstTitle = component.productos[0].titulo;
    expect(compiled.textContent).toContain(firstTitle);
  });
});
