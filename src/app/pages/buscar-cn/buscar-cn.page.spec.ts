import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCNPage } from './buscar-cn.page';

describe('BuscarCNPage', () => {
  let component: BuscarCNPage;
  let fixture: ComponentFixture<BuscarCNPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarCNPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
