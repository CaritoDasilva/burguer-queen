import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MenuRestaurant } from '../models/menu-model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuRestaurantUrl = 'api/menu';  // Mock: URL to web api
  constructor (
    private http: HttpClient) { }

  getRestaurantMenu() {
    // Mock: Comment or Remove it when a real server is ready to receive requests
    return this.http.get<MenuRestaurant[]>(this.menuRestaurantUrl).pipe();
  }
}
