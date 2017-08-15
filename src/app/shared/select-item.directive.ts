import { Directive,OnInit,ElementRef,Renderer2,} from '@angular/core';

@Directive({
    selector: '[appSelectInput]',
    host: {
        '(blur)': 'onBlur($event)',
        '(focus)': 'onFocus($event)'
    }
})
export class SelectInputDirective implements OnInit {
    showError = false;

    constructor(private render: Renderer2, private selectInput: ElementRef) {

    }

    ngOnInit() {

    }



    onBlur(event) {

        const inputWrap = this.render.parentNode(this.selectInput.nativeElement);
        this.render.removeClass(inputWrap, 'is-focused');
        this.render.removeClass(inputWrap, 'is-empty');

    }


    onFocus(event) {
        console.log("SELECT");
        const inputWrap = this.render.parentNode(this.selectInput.nativeElement);
        this.render.addClass(inputWrap, 'is-focused');
        this.render.removeClass(inputWrap, 'is-empty');

    }






}
