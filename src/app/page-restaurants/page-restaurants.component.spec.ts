import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRestaurantsComponent } from './page-restaurants.component';

describe('PageRestaurantsComponent', () => {
  let component: PageRestaurantsComponent;
  let fixture: ComponentFixture<PageRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
