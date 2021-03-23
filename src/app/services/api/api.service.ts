import { Injectable } from '@angular/core';
import { customersI} from '../../models/customers.interface';
import { reponseI} from '../../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

    url:string="https://localhost:44335/api/Customers";
  constructor(private http:HttpClient) { }

  getAllCustomers():Observable<customersI[]>{

      return this.http.get<customersI[]>(this.url);
  }

}
