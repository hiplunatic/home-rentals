import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesWrapperComponent } from './homes-wrapper.component';

describe('HomesWrapperComponent', () => {
  let component: HomesWrapperComponent;
  let fixture: ComponentFixture<HomesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
