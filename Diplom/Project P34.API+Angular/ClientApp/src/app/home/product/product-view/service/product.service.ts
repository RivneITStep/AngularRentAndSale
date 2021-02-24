import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductItem } from '../model/product-item.model';

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
  
    constructor(private http: HttpClient) { }
    baseUrl = '/api/Product';
    temp = '';

    getProduct(){
       return this.http.get(this.baseUrl + '/' + this.temp);
    }

    getProducts(){
      return this.http.get(this.baseUrl + '/getProducts');
    }

}