import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Restaurant } from '../model/Restaurant';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-find-restaurants-pizza',
  templateUrl: './find-restaurants-pizza.component.html',
  styleUrls: ['./find-restaurants-pizza.component.scss']
})
export class FindRestaurantsPizzaComponent implements OnInit {
  restaurants: Restaurant[];
  spinnerLoad = true;
  showTable = false;
  total: number;
  p = 0;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.restaurantService.findRestaurantByPizza().subscribe(restaurants => {
      this.restaurants = restaurants;
      this.total = this.restaurants.length;
      this.spinnerLoad = false;
      this.showTable = true;
    });
  }

  restaurantDetails(id: string) {
    this.router.navigate(['/home-restaurant/restaurant-details', id]);
  }
}
