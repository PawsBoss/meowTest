import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../../shared/cart.service';
import { CartItem } from '../../../shared/cart-item.model';




//  Here I will receive and order element to process and display
//  Use Input to allow data to be passed here


@Component({
    selector: 'app-order-element',
    templateUrl: './order-element.component.html',
    styleUrls: ['./order-element.component.scss'],
})
export class OrderElementComponent implements OnInit {
    @Input() element: CartItem;
    @Input() id: number;

    constructor(private cartService: CartService) { }

    ngOnInit() {
        console.log("INDEX IN ORDER_ELEMENT", this.id);
    }

    onEdit(event) {
        console.log("edit item");
        console.log(this.id);
    }

    onDelete(event) {
        console.log("delte item");
        console.log(this.id);
        this.cartService.deleteItem(this.id);

    }

}
