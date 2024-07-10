import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JadwalBiayaPage } from './jadwal-biaya.page';

describe('JadwalBiayaPage', () => {
  let component: JadwalBiayaPage;
  let fixture: ComponentFixture<JadwalBiayaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JadwalBiayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
