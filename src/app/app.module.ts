import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { OrderComponent } from './home/order/order.component';
import { OrderElementComponent } from './home/order/order-element/order-element.component';
import { TelInputDirective } from './shared/tel-input.directive';
import { SelectInputDirective } from './shared/select-item.directive';
import { CartService } from './shared/cart.service';
import { ConversationComponent } from './conversation/conversation.component';
import { HomeComponent } from './home/home.component';
import { FactsComponent } from './facts/facts.component';
import { FactElementComponent } from './facts/fact-element/fact-element.component';
import { ConversationElementComponent } from './conversation/conversation-element/conversation-element.component';

const appRoutes = [
    {path: '', component: HomeComponent},
    {path: 'view', component: ConversationComponent},
    {path: 'facts', component: FactsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderElementComponent,
    TelInputDirective,
    SelectInputDirective,
    ConversationComponent,
    HomeComponent,
    FactsComponent,
    FactElementComponent,
    ConversationElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TextMaskModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
