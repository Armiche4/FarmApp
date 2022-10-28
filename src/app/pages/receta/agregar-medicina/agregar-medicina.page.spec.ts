import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMedicinaPage } from './agregar-medicina.page';

describe('AgregarMedicinaPage', () => {
  let component: AgregarMedicinaPage;
  let fixture: ComponentFixture<AgregarMedicinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMedicinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMedicinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
