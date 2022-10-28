import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarMedicinaPage } from './modificar-medicina.page';

describe('ModificarMedicinaPage', () => {
  let component: ModificarMedicinaPage;
  let fixture: ComponentFixture<ModificarMedicinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarMedicinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarMedicinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
