import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRecetaPage } from './modificar-receta.page';

describe('ModificarRecetaPage', () => {
  let component: ModificarRecetaPage;
  let fixture: ComponentFixture<ModificarRecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarRecetaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
