import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {Router} from '@angular/router';
import {customersI} from '../../models/customers.interface';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers:any[]=[];

  constructor(private api: ApiService, private router:Router) {this.customers=[]; }
  
  ngOnInit(): void {
    

    //cuando se llama el comonente este método se ejecuta
    this.api.getAllCustomers().subscribe(data=>{

      this.customers=data;
      console.log(data);
    })
  }

  editCustomer(id:string)
  {
    this.router.navigate(['edit-customer',id])
    console.log(id);

  }

  newCustomer()
  {
    this.router.navigate(['new-customer']);
  }

}
