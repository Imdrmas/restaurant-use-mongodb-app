import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRestaurantsCuisineComponent } from './find-restaurants-cuisine.component';

describe('FindRestaurantsCuisineComponent', () => {
  let component: FindRestaurantsCuisineComponent;
  let fixture: ComponentFixture<FindRestaurantsCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindRestaurantsCuisineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRestaurantsCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
