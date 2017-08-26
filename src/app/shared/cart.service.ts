
import { Subject } from 'rxjs/Subject';
import { CartItem } from './cart-item.model';

export class CartService {
    cart: CartItem[] = [
        new CartItem('12', 299, '5625542312', '15 Minutes', 'this is a test'),
        new CartItem('24', 499, '3109802031', '12 Hours', 'Yoyoyoyoyo this is the goodkink puddinpops'),
        new CartItem('36', 899, '2133123989', '4 Hours', 'I am the greateset ever!!!')
    ];
    total:number = 0;

    //  Create a new subject that we can send data and subscribe to
    cartTotal = new Subject();




    addItem( amount: string, price: number, phone: string, frequency: string, secret: string ) {

        //  Push the item to the cart array
        this.cart.push( new CartItem(amount, price, phone, frequency, secret));

        //  Everytime I get a new order update the total price
        this.total += price;

        //  Send the total of the cart everytime we get a new item
        this.cartTotal.next(this.total);

    }


    updateItem(index: number, item: CartItem) {
        //  Get the index or id of the array and update the cart item
        this.cart[index] = item;

    }

    deleteItem(index: number) {
        //  Remove one item starting with the intex
        this.total -= this.cart[index].price;
        this.cart.splice(index, 1);

        //  Send the total of the cart everytime we get delete item
        this.cartTotal.next(this.total);
    }





}
