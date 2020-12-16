import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { Restaurant } from '../model/Restaurant';
import { RestaurantService } from '../service/restaurant.service';
@Component({
  selector: 'app-home-restaurant',
  templateUrl: './home-restaurant.component.html',
  styleUrls: ['./home-restaurant.component.scss']
})
export class HomeRestaurantComponent implements OnInit {
  submitted = false;
  restaurants: Restaurant[];
  restaurant: Restaurant = new Restaurant();
  total: number;

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.restaurantService.findAllRestaurants().subscribe(res => {
      this.restaurants = res;
    })
  }
  onSubmit(name: string) {
    this.restaurantService.findRestaurantByName(name).subscribe(res => {
      this.restaurants = res.slice(0, 3);
      this.submitted = true;
      this.total = this.restaurants.length;
    });
  }
  restaurantDetails(id: string) {
    this.router.navigate(['/home-restaurant/restaurant-details', id]);
  }
}