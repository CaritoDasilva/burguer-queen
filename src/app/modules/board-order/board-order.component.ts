import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-board-order',
  templateUrl: './board-order.component.html',
  styleUrls: ['./board-order.component.css']
})
export class BoardOrderComponent implements OnInit {

  constructor (private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getRestaurantMenu().subscribe((data: any) =>
      console.log(data));
  }

}
