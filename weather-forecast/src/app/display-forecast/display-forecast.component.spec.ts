import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayForecastComponent } from './display-forecast.component';

describe('DisplayForecastComponent', () => {
  let component: DisplayForecastComponent;
  let fixture: ComponentFixture<DisplayForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
