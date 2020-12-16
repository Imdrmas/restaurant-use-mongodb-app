import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FindAllRestaurantsComponent } from './find-all-restaurants/find-all-restaurants.component';
import { HomeRestaurantComponent } from './home-restaurant/home-restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { FindRestaurantsBoroughComponent } from './find-restaurants-borough/find-restaurants-borough.component';
import { FindRestaurantsBurgerComponent } from './find-restaurants-burger/find-restaurants-burger.component';
import { FindRestaurantsCuisineComponent } from './find-restaurants-cuisine/find-restaurants-cuisine.component';
import { PageRestaurantsComponent } from './page-restaurants/page-restaurants.component';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';
import { TypeCuisinesComponent } from './type-cuisines/type-cuisines.component';
import { FindRestaurantsPizzaComponent } from './find-restaurants-pizza/find-restaurants-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    FindAllRestaurantsComponent,
    HomeRestaurantComponent,
    FindRestaurantsBoroughComponent,
    FindRestaurantsBurgerComponent,
    FindRestaurantsCuisineComponent,
    PageRestaurantsComponent,
    RestaurantsDetailsComponent,
    TypeCuisinesComponent,
    FindRestaurantsPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, NgxPaginationModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
