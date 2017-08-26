import { Component, OnInit, Renderer2, HostBinding } from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { parse, format, isValidNumber} from 'libphonenumber-js';
//  ADD A SAD KITTY WHEN THEY ARE LEAVING PAGE WITH A SPECIAL OFFER

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
    //  Settings variables
    mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    times = ['15 Minutes','30 Minutes','45 Minutes','1 Hour','2 Hours','4 Hours','6 Hours','8 Hours','12 Hours','24 Hours'];
    plans = [{amount: '12', price: 299},{amount: '24', price: 499},{amount: '36', price: 899}];
    meowPlans = [{
        amount: '12',
        price: 299,
        img: "../assets/img/meow3.png"
    },
    {
        amount: '24',
        price: 499,
        img: "../assets/img/meow1.png"
    },{
        amount: '36',
        price: 899,
        img: "../assets/img/meow2.png"
    }];

    //  User Plan Selections
    selectedPlan:{amount: string, price: number};
    planMeows: string;
    planPrice: number;

    checkingOut = false;
    currentFormTitle = "Plan Settings";

    showPhoneError = false;
    isPhoneValid = false;
    orderForm: FormGroup;


    constructor(private render:Renderer2, private cartService: CartService) { }

    ngOnInit() {

        this.orderForm = new FormGroup({
            'orderPhone': new FormControl('', [Validators.required, this.phoneValidator.bind(this)]),
            'orderFrequency': new FormControl(null, Validators.required),
            'orderSecret': new FormControl(null)
        });


        this.orderForm.get('orderPhone').statusChanges.subscribe(
            (status) => {
                status === "VALID" ? this.isPhoneValid = true : this.isPhoneValid = false;
            }
        );

    }



    phoneValidator(control: FormControl): {[s:string]: boolean} {
        const parseNum = parse(control.value, 'US');
        const telValid = isValidNumber(parseNum);

        if (telValid) {
            return null;
        } else {
            return {'invalidTelephone': true};
        }

    }

    onPlanSelect(plan:{amount:string,price:number}) {
        //  When the btn is click add the values our variables
        this.selectedPlan = plan;
        this.planMeows = plan.amount;
        this.planPrice = plan.price;

    }



    onAddToCart(trigger) {

        const {orderPhone, orderFrequency, orderSecret} = this.orderForm.value;
        this.cartService.addItem(this.planMeows, this.planPrice, orderPhone, orderFrequency, orderSecret);
        this.orderForm.reset();

        //  The trigger is the span icon we use to close the modal
        let clickEvent = new Event('click');
        trigger.dispatchEvent(clickEvent);
        console.log("$$$$$$$");
        console.log(this.planMeows, this.planPrice, orderPhone, orderFrequency, orderSecret);

    }



    //  Emit and event and pass the data
    onCheckout() {

        //  set checkingOut to true
        this.checkingOut = true;
        this.currentFormTitle = "Payment Details"
        //

    }





}
