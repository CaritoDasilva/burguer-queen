export class MenuModel {

    id: number;
    name: string;
    price: number;
    timetable: string;
    category: string;
    ingredients: string;
    active: boolean;
    constructor (
        id: number,
        name: string,
        price: number,
        timetable: string,
        category: string,
        ingredients: string,
        active: boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.timetable = timetable;
        this.category = category;
        this.ingredients = ingredients;
    }
}


