import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

/* import { HeaderComponent } from './estructre/header/header.component';
import { FooterComponent } from './estructre/footer/footer.component';
import { ListCustomerComponent } from './view/list-customer/list-customer.component';
import { NewCustomerComponent } from './view/new-customer/new-customer.component';
import { EditCustomerComponent } from './view/edit-customer/edit-customer.component'; */


@NgModule({
  declarations: [
    AppComponent,
    routingComponents //esta variable se exportó desde app-routings.module con todos los módulos creados
    /* HeaderComponent,
    FooterComponent,
    ListCustomerComponent,
    NewCustomerComponent,
    EditCustomerComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
