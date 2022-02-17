import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertAddressComponent } from './convert-address.component';

describe('ConvertAddressComponent', () => {
  let component: ConvertAddressComponent;
  let fixture: ComponentFixture<ConvertAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
