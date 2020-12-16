import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../model/Restaurant';
import {ActivatedRoute, Router} from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-type-cuisines',
  templateUrl: './type-cuisines.component.html',
  styleUrls: ['./type-cuisines.component.scss']
})
export class TypeCuisinesComponent implements OnInit {
  typeCuisine: string;
  restaurants: Restaurant[];
   spinnerLoad = true;
   total: number;
   p = 0;
 
   constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) { }
 
   ngOnInit() {
     this.typeCuisine = this.route.snapshot.params.typeCuisine;
     this.restaurantService.findRestaurantByCuisine(this.typeCuisine).subscribe(res => {
       this.restaurants = res;
       this.total = this.restaurants.length;
       this.spinnerLoad = false;
     });
   }
   restaurantDetails(id: string) {
     this.router.navigate(['/home-restaurant/restaurant-details', id]);
   }
}
