import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const menu = [
      {
        id: 0,
        name: 'Cafe americano',
        price: 5,
        timetable: 'breakfast',
        category: 'drinks',
        active: Boolean
      },
      {
        id: 2,
        name: 'Cafe con leche',
        price: 7,
        timetable: 'breakfast',
        category: 'drinks',
        active: Boolean
      },
      {
        id: 3,
        name: 'Sandwich de jamón y queso',
        price: 10,
        timetable: 'breakfast',
        category: 'food',
        active: Boolean
      },
      {
        id: 4,
        name: 'Jugo natural',
        price: 7,
        timetable: 'breakfast',
        category: 'drinks',
        active: Boolean
      },
      {
        id: 5,
        name: 'Hamburguesa Simple',
        price: 10,
        timetable: 'All Day',
        category: 'food',
        ingredients: ['meat', 'chicken', 'mixed'],
        active: Boolean
      },
      {
        id: 6,
        name: 'Hamburguesa Doble',
        price: 15,
        timetable: 'All Day',
        category: 'food',
        ingredients: ['meat', 'chicken', 'mixed'],
        active: Boolean
      },
      {
        id: 7,
        name: 'Papas fritas',
        price: 1,
        timetable: 'All Day',
        category: 'accompaniment',
        active: Boolean
      },
      {
        id: 8,
        name: 'Onion Rings',
        price: 1,
        timetable: 'All Day',
        category: 'accompaniment',
        active: Boolean
      },
      {
        id: 9,
        name: 'Agua 500ml',
        price: 5,
        timetable: 'All Day',
        category: 'drinks',
        active: Boolean
      },
      {
        id: 10,
        name: 'Agua 750ml',
        price: 8,
        timetable: 'All Day',
        category: 'drinks',
        active: Boolean
      },
      {
        id: 11,
        name: 'Gaseosa 750ml',
        price: 8,
        timetable: 'All Day',
        active: Boolean
      },
      {
        id: 12,
        name: 'Gaseosa 500ml',
        price: 5,
        timetable: 'All Day',
        category: 'drinks',
        active: Boolean
      },
    ];
    return { menu };
  }
}
