import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCuisinesComponent } from './type-cuisines.component';

describe('TypeCuisinesComponent', () => {
  let component: TypeCuisinesComponent;
  let fixture: ComponentFixture<TypeCuisinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCuisinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCuisinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
