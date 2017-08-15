import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { CartItem } from '../shared/cart-item.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    cartItems: CartItem[] = [];

    constructor(private cartService: CartService) {

    }

    //  ****   Set intial properties here not in constructor
    ngOnInit() {
        //  When the component loads it will refrence the items CartItem in my cart array in CartService
        this.cartItems = this.cartService.cart;
    }

}
