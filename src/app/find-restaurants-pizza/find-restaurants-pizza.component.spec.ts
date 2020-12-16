import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRestaurantsPizzaComponent } from './find-restaurants-pizza.component';

describe('FindRestaurantsPizzaComponent', () => {
  let component: FindRestaurantsPizzaComponent;
  let fixture: ComponentFixture<FindRestaurantsPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindRestaurantsPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRestaurantsPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
