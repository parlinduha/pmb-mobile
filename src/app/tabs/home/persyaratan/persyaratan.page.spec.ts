import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersyaratanPage } from './persyaratan.page';

describe('PersyaratanPage', () => {
  let component: PersyaratanPage;
  let fixture: ComponentFixture<PersyaratanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersyaratanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
