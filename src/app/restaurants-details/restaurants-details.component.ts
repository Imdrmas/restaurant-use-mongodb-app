import {Component, forwardRef, Inject, NgZone, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Address } from '../model/Address';
import { Restaurant } from '../model/Restaurant';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurants-details',
  templateUrl: './restaurants-details.component.html',
  styleUrls: ['./restaurants-details.component.scss']
})
export class RestaurantsDetailsComponent implements OnInit {
  restaurants: Restaurant[];
  restaurant: Restaurant = new Restaurant();
  address: Address = new Address();
  idRestaurant: string;


  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idRestaurant = this.route.snapshot.params.idRestaurant;
    this.restaurantService.findRestaurantById(this.idRestaurant).subscribe(res => {
      this.restaurants = res;
      this.restaurants.forEach(data => {
        this.restaurant = data;
        this.address = this.restaurant.address;
      });
    });
  }

}
