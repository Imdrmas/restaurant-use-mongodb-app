import { FindRestaurantsPizzaComponent } from './find-restaurants-pizza/find-restaurants-pizza.component';
import { HomeRestaurantComponent } from './home-restaurant/home-restaurant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindAllRestaurantsComponent } from './find-all-restaurants/find-all-restaurants.component';
import { FindRestaurantsBoroughComponent } from './find-restaurants-borough/find-restaurants-borough.component';
import { FindRestaurantsBurgerComponent } from './find-restaurants-burger/find-restaurants-burger.component';
import { FindRestaurantsCuisineComponent } from './find-restaurants-cuisine/find-restaurants-cuisine.component';
import { PageRestaurantsComponent } from './page-restaurants/page-restaurants.component';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';
import { TypeCuisinesComponent } from './type-cuisines/type-cuisines.component';

const routes: Routes = [
  {path: '', redirectTo: 'home-restaurant', pathMatch: 'full'},
  {
    path: 'home-restaurant',
    component: HomeRestaurantComponent,
    children: [
      {
        path: 'find-all-restaurant',
        component: FindAllRestaurantsComponent,
      },
      {
        path: 'findRestaurantBorough',
        component: FindRestaurantsBoroughComponent
      },
      {
        path: 'findByPizza',
        component: FindRestaurantsPizzaComponent
      },
      {
        path: 'findRestaurantCuisine',
        component: FindRestaurantsCuisineComponent
      },
      {
        path: '',
        component: PageRestaurantsComponent
      },
      {
        path: 'restaurant-details/:idRestaurant',
        component: RestaurantsDetailsComponent,
      },
      {
        path: 'type-cuisine/:typeCuisine',
        component: TypeCuisinesComponent
      },
      {
        path: 'findByBurgerKing',
        component: FindRestaurantsBurgerComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
