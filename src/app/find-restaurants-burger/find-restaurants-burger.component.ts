import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Restaurant } from '../model/Restaurant';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-find-restaurants-burger',
  templateUrl: './find-restaurants-burger.component.html',
  styleUrls: ['./find-restaurants-burger.component.scss']
})
export class FindRestaurantsBurgerComponent implements OnInit {
  restaurants: Restaurant[];
  spinnerLoad = true;
  showTable = false;
  total: number;
  p = 0;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.restaurantService.findRestaurantByBurgerKing().subscribe(restaurants => {
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
