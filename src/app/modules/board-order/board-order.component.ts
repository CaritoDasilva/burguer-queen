import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuRestaurant } from '../../models/menu-model';

@Component({
  selector: 'app-board-order',
  templateUrl: './board-order.component.html',
  styleUrls: ['./board-order.component.css']
})
export class BoardOrderComponent implements OnInit {
  menuList: MenuRestaurant[] = [];
  constructor (private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getRestaurantMenu().subscribe((data: MenuRestaurant[]) => {
      console.log(data);
      this.menuList = data;
    });
  }

}
