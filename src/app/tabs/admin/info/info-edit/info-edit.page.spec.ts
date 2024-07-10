import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoEditPage } from './info-edit.page';

describe('InfoEditPage', () => {
  let component: InfoEditPage;
  let fixture: ComponentFixture<InfoEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
