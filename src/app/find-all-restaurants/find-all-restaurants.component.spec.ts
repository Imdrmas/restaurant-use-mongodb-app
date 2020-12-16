import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllRestaurantsComponent } from './find-all-restaurants.component';

describe('FindAllRestaurantsComponent', () => {
  let component: FindAllRestaurantsComponent;
  let fixture: ComponentFixture<FindAllRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
