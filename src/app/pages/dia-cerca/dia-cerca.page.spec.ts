import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaCercaPage } from './dia-cerca.page';

describe('DiaCercaPage', () => {
  let component: DiaCercaPage;
  let fixture: ComponentFixture<DiaCercaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaCercaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaCercaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
