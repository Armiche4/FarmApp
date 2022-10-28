import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaFarmaciasPage } from './mapa-farmacias.page';

describe('MapaFarmaciasPage', () => {
  let component: MapaFarmaciasPage;
  let fixture: ComponentFixture<MapaFarmaciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaFarmaciasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaFarmaciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
