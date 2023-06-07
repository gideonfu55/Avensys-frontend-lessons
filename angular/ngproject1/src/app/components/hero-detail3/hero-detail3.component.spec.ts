import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetail3Component } from './hero-detail3.component';

describe('HeroDetail3Component', () => {
  let component: HeroDetail3Component;
  let fixture: ComponentFixture<HeroDetail3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDetail3Component]
    });
    fixture = TestBed.createComponent(HeroDetail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
