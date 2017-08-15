import { CartItem } from './cart-item.model';

export class CartService {
    cart: CartItem[] = [
            new CartItem('12', '(323) 231-3212', '15 Minutes', 'Hello World!')
    ];



    addItem( amount: string, phone: string, frequency: string, secret: string ) {
        console.log("ADDING TO CART");
        console.log(amount,phone,frequency,secret);

        //  Push the item to the cart array
        this.cart.push( new CartItem(amount, phone, frequency, secret));
    }

    updateItem(index: number, item: CartItem) {
        //  Get the index or id of the array and update the cart item
        this.cart[index] = item;

    }

    deleteItem(index: number) {
        //  Remove one item starting with the intex
        this.cart.splice(index, 1);
    }

}
