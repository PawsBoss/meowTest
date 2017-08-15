import { Component, OnInit, Renderer2, HostBinding} from '@angular/core';
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
    orderForm: FormGroup;
    mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    times = ['15 Minutes','30 Minutes','45 Minutes','1 Hour','2 Hours','4 Hours','6 Hours','8 Hours','12 Hours','24 Hours'];
    plans = [{amount: '12', price: '$2.99'},{amount: '24', price: '$4.99'},{amount: '36', price: '$8.99'}];

    showPhoneError = false;
    isPhoneValid = false;


    constructor(private render:Renderer2, private cartService: CartService) { }

    ngOnInit() {
        this.orderForm = new FormGroup({
            'orderAmount': new FormControl('24', Validators.required),
            'orderPhone': new FormControl('', [Validators.required, this.phoneValidator.bind(this)]),
            'orderFrequency': new FormControl(null, Validators.required),
            'orderSecret': new FormControl(null)
        });



        this.orderForm.get('orderPhone').statusChanges.subscribe(
            (status) => {
                if (status === "VALID") {
                    this.isPhoneValid = true;
                } else {
                    this.isPhoneValid = false;
                }
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




    //  Emit and event and pass the data
    onOrderSubmit() {
        console.log(this.orderForm);
        const {orderAmount, orderPhone, orderFrequency, orderSecret} = this.orderForm.value;
        this.cartService.addItem(orderAmount, orderPhone, orderFrequency, orderSecret);

    }


    checkPhone() {
        this.showPhoneError = true;

    }


    onPlanSelected(event) {
        console.log(event);
        console.log("plan Selected");
    }


}
