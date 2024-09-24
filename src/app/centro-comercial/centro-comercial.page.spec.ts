import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentroComercialPage } from './centro-comercial.page';

describe('CentroComercialPage', () => {
  let component: CentroComercialPage;
  let fixture: ComponentFixture<CentroComercialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroComercialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
