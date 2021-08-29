import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosDeCajasComponent } from './movimientos-de-cajas.component';

describe('MovimientosDeCajasComponent', () => {
  let component: MovimientosDeCajasComponent;
  let fixture: ComponentFixture<MovimientosDeCajasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientosDeCajasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosDeCajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
