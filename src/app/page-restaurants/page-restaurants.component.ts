import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Restaurant } from '../model/Restaurant';
import { RestaurantService } from '../service/restaurant.service';


@Component({
  selector: 'app-page-restaurants',
  templateUrl: './page-restaurants.component.html',
  styleUrls: ['./page-restaurants.component.scss']
})
export class PageRestaurantsComponent implements OnInit {
  restaurantsReserve: Restaurant[];
  cuisines: Restaurant[];
  restaurantsBurgerKings: Restaurant[];
  filteredData: Restaurant[];
  restaurantsNewYork: Restaurant[];
  restaurant: any = {};
  address: any = {};
  showAllCuisine = true;
  hideCuisine = false;
  spinnerLoad = true;
  p = 0;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.findNewYork();
    this.findBurgerKing();
    this.findAllRestaurants();
    this. findRestaurantsReserve();
  }
 findRestaurantsReserve() {
   this.restaurantService.findAllRestaurants().subscribe(restaurants => {
     this.restaurantsReserve = restaurants.slice(0, 3);
     this.spinnerLoad = false;
   });
 }

  findAllRestaurants() {
    this.restaurantService.findAllRestaurants().subscribe(restaurants => {
      this.cuisines = restaurants.slice(0, 4);
      this.filteredData = Array.from(this.cuisines.reduce((m, t) => m.set(t.cuisine, t), new Map()).values());
      this.spinnerLoad = false;
    });
  }
  restaurantDetails(id: string) {
    this.router.navigate(['/home-restaurant/restaurant-details', id]);
  }
  restaurantTypeCuisine(cuisine: string) {
    this.router.navigate(['/home-restaurant/type-cuisine', cuisine]);
  }

  findBurgerKing() {
    this.restaurantService.findRestaurantByBurgerKing().subscribe(restaurants => {
      this.restaurantsBurgerKings = restaurants;
    });
  }
  findNewYork() {
    this.restaurantService.findRestaurantByNewYork().subscribe(newYork => {
      this.restaurantsNewYork = newYork.slice(0, 4);
    });
  }
 readMoreNewYork() {
     this.restaurantService.findRestaurantByNewYork().subscribe(newYork => {
       this.restaurantsNewYork = newYork;
     });
   }
}
