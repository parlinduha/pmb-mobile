import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerkuliahanPage } from './perkuliahan.page';

describe('PerkuliahanPage', () => {
  let component: PerkuliahanPage;
  let fixture: ComponentFixture<PerkuliahanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerkuliahanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
