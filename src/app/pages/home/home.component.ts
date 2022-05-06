import { Component, OnInit } from '@angular/core';

export interface Item {
  id: number;
  name: string;
  price: number;
}

export interface Cart {
  items: Item[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  cart: Cart;
  toggleOn = false;

  constructor() {
    this.cart = {
      items: [
        {
          id: 1,
          name: "Soap",
          price: 2.99
        },
        {
          id: 2,
          name: "F35",
          price: 49.99
        },
        {
          id: 3,
          name: "Pen",
          price: 1099
        }
      ]
    };
  }

  ngOnInit(): void {

  }

}
