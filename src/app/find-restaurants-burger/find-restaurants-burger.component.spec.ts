import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRestaurantsBurgerComponent } from './find-restaurants-burger.component';

describe('FindRestaurantsBurgerComponent', () => {
  let component: FindRestaurantsBurgerComponent;
  let fixture: ComponentFixture<FindRestaurantsBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindRestaurantsBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRestaurantsBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
