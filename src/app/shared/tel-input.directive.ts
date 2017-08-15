import { Directive,OnInit,ElementRef,Renderer2, HostBinding } from '@angular/core';
import { parse, format, asYouType, isValidNumber} from 'libphonenumber-js';

@Directive({
    selector: '[appTelInput]',
    host: {
        '(blur)': 'onBlur($event)',
        '(focus)': 'onFocus($event)'
    }
})
export class TelInputDirective implements OnInit {
    showPhoneError = false;

    constructor(private render: Renderer2, private telInput: ElementRef) {

    }

    ngOnInit() {

    }



    onBlur(event) {

        let inputVal = this.telInput.nativeElement.value;
        const inputWrap = this.render.parentNode(this.telInput.nativeElement);
        this.render.removeClass(inputWrap, 'is-focused');

        if(inputVal) {this.render.removeClass(inputWrap, 'is-empty');}
        else {this.render.addClass(inputWrap, 'is-empty')}

    }


    onFocus(event) {

        const inputVal = this.telInput.nativeElement.value;
        const inputWrap = this.render.parentNode(this.telInput.nativeElement);

        this.render.addClass(inputWrap, 'is-focused');
        this.render.removeClass(inputWrap, 'is-empty');

    }






}
