import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoAddPage } from './info-add.page';

describe('InfoAddPage', () => {
  let component: InfoAddPage;
  let fixture: ComponentFixture<InfoAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
