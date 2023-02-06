import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMFE1Component } from './home-mfe1.component';

describe('HomeMFE1Component', () => {
  let component: HomeMFE1Component;
  let fixture: ComponentFixture<HomeMFE1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMFE1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMFE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
