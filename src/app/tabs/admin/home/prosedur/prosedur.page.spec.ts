import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProsedurPage } from './prosedur.page';

describe('ProsedurPage', () => {
  let component: ProsedurPage;
  let fixture: ComponentFixture<ProsedurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProsedurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
