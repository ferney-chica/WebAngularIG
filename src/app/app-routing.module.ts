import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './estructre/header/header.component';
import { FooterComponent } from './estructre/footer/footer.component';
import { ListCustomerComponent } from './view/list-customer/list-customer.component';
import { NewCustomerComponent } from './view/new-customer/new-customer.component';
import { EditCustomerComponent } from './view/edit-customer/edit-customer.component';


const routes: Routes = [
  {path:'', redirectTo:'list', pathMatch:'full'},
  {path:'list', component:ListCustomerComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'new-customer', component:NewCustomerComponent},
  {path:'edit-customer/:id', component:EditCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Exportación de los componentes
export const routingComponents=[ListCustomerComponent,HeaderComponent,FooterComponent,NewCustomerComponent,EditCustomerComponent]
