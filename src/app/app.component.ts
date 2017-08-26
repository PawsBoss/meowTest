import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    navIsActive:boolean = false;

    constructor() {

    }
    ngOnInit() {
    }

    onNavTrigger() {
        this.navIsActive = !this.navIsActive;
    }


}
