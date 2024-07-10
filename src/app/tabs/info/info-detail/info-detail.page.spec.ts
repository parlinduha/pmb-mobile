import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoDetailPage } from './info-detail.page';

describe('InfoDetailPage', () => {
  let component: InfoDetailPage;
  let fixture: ComponentFixture<InfoDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
