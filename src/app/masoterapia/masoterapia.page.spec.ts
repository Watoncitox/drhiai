import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasoterapiaPage } from './masoterapia.page';

describe('MasoterapiaPage', () => {
  let component: MasoterapiaPage;
  let fixture: ComponentFixture<MasoterapiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MasoterapiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
