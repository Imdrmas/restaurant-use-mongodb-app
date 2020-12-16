import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRestaurantsBoroughComponent } from './find-restaurants-borough.component';

describe('FindRestaurantsBoroughComponent', () => {
  let component: FindRestaurantsBoroughComponent;
  let fixture: ComponentFixture<FindRestaurantsBoroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindRestaurantsBoroughComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRestaurantsBoroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
