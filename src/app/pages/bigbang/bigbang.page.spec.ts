import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BigbangPage } from './bigbang.page';

describe('BigbangPage', () => {
  let component: BigbangPage;
  let fixture: ComponentFixture<BigbangPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BigbangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
