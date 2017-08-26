import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { parse, format, isValidNumber} from 'libphonenumber-js';
import { CartService } from '../shared/cart.service';
import { CartItem } from '../shared/cart-item.model';
import { StripeService } from "ngx-stripe";
import { Elements, Element as StripeElement } from "ngx-stripe";


//   Show stripe forma
//  Send payment request to server
//  Receive response and notify user


@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    paymentForm: FormGroup;
    cartItems: CartItem[] = [];
    totalPrice: number;

    elements: Elements;
    card: StripeElement;
    @ViewChild('card') cardRef: ElementRef;


    constructor(private cartService: CartService, private stripeService: StripeService) { }

    ngOnInit() {

        //  I NEED TO MAKE A SUBSCRIBER TO UPDATE THE TOTAL



        //  Make a copy(reference) of the cart items
        this.cartItems = this.cartService.cart;


        console.log("%%%%%%");
        console.log(this.cartService.cart);

        //  Email form input
        this.paymentForm = new FormGroup({
            'orderEmail': new FormControl('', [Validators.required, Validators.email])
        });

        this.stripeService.elements()
            .subscribe(elements => {
                this.elements = elements;
                // Only mount the element the first time
                if (!this.card) {
                    this.card = this.elements.create('card', {
                        style: {
                            base: {
                                iconColor: '#666EE8',
                                color: '#31325F',
                                lineHeight: '40px',
                                fontWeight: 300,
                                fontSize: '18px',
                                '::placeholder': {
                                    color: '#CFD7E0'
                                }
                            }
                        }
                    });
                this.card.mount(this.cardRef.nativeElement);
            }
        });


    }




    onPayment() {


        const name = this.paymentForm.value.orderEmail;


        //  Get the email and card token
        //  Send them alog with all the cartItems to the backend to make charge request
        const oderPayload = {
            email: name,
        };


        console.log("PAYMENT");
        console.log(this.paymentForm);

        this.stripeService
            .createToken(this.card, { name })
            .subscribe(token => {
                console.log('Token created correctly');
                console.log(token);
                console.log(this.cartItems);
        });

        }




        onEdit(index) {
            console.log("IN CheckoutComponent");
            console.log("Edit");
            console.log(index);

        }

        onDelete(index) {
            console.log("IN CheckoutComponent");
            console.log("DELETE");
            console.log(index);
            this.cartService.deleteItem(index);
        }



}
