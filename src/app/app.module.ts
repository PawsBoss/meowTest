
//  Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { Routes, RouterModule } from '@angular/router';

//  Third Party
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MdInputModule,MdSelectModule, MdButtonModule,MdSidenavModule, MdIconModule,MdListModule } from '@angular/material';
import { NgxStripeModule } from 'ngx-stripe';

//  My Components
import { AppComponent } from './app.component';
import { OrderComponent } from './home/order/order.component';
import { ConversationComponent } from './conversation/conversation.component';
import { HomeComponent } from './home/home.component';
import { FactsComponent } from './facts/facts.component';
import { FactElementComponent } from './facts/fact-element/fact-element.component';
import { ConversationElementComponent } from './conversation/conversation-element/conversation-element.component';

//  My Services
import { CartService } from './shared/cart.service';

//  My Directives
import { TelInputDirective } from './shared/tel-input.directive';
import { MorphButtonDirective } from './shared/morph-button.directive';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivaryPolicyComponent } from './privary-policy/privary-policy.component';
import { CartComponent } from './cart/cart.component';


//  Routes
const appRoutes = [
    {path: '', component: HomeComponent},
    {path: 'view', component: ConversationComponent},
    {path: 'facts', component: FactsComponent},
    {path: 'privacy-policy', component: PrivaryPolicyComponent},
    {path: 'terms-of-use', component: TermsOfUseComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    ConversationComponent,
    HomeComponent,
    FactsComponent,
    FactElementComponent,
    ConversationElementComponent,
    TelInputDirective,
    MorphButtonDirective,
    TermsOfUseComponent,
    PrivaryPolicyComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TextMaskModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    MdInputModule,
    MdSelectModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    NgxStripeModule.forRoot('pk_test_rvAesdOilg6k9HJkEah0xLxs')
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
