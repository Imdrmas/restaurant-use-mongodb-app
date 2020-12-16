
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Restaurant } from '../model/Restaurant';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-find-restaurants-cuisine',
  templateUrl: './find-restaurants-cuisine.component.html',
  styleUrls: ['./find-restaurants-cuisine.component.scss']
})
export class FindRestaurantsCuisineComponent implements OnInit {
  submitted = false;
  restaurants: Restaurant[];
  restaurant: Restaurant = new Restaurant();
  total: number;
  p = 0;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit(cuisine: string) {
    this.restaurantService.findRestaurantByCuisine(cuisine).subscribe(res => {
      this.restaurants = res;
      this.submitted = true;
      this.total = this.restaurants.length;
    });

  }

  restaurantDetails(cuisine: string) {
    this.router.navigate(['/home-restaurant/type-cuisine', cuisine]);
  }

}
