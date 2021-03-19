import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductItem } from '../model/product-item.model';
import { WishListModel } from '../../../../Models/wishlist.model';
import { ApiResult } from '../../../../Models/result.model';

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
  
    constructor(private http: HttpClient) { }
    baseUrl = '/api/Product';
    url2= '/api/ViewedProducts';
    temp = '';

    es: EventEmitter<string> = new EventEmitter();

    search='';
   


    getProduct(){
       return this.http.get(this.baseUrl + '/' + this.temp);
    }

    getProductById(id: string){
      return this.http.get(this.baseUrl + '/' + id);
    }

    getProducts(){
      return this.http.get(this.baseUrl + '/getProducts');
    }
    
    getAllProducts() {
      return this.http.get(this.baseUrl + '/getProducts');
    }

    getViewedProducts(){
      return this.http.get(this.url2 + '/getViewedProducts');
    }
    
    // addViewedProduct(model: ViewedProductModel): Observable<ApiResult> {
    //   return this.http.post<ApiResult>(this.url2 + '/addViewedProduct', model);
    // }

    searchProduct(id: string): Observable<ProductItem[]> {
      return this.http.get<ProductItem[]>(this.baseUrl + `/searchProduct?searchString=${id}`);
    }


    addToWishList(model: WishListModel) {
      return this.http.post<ApiResult>(this.baseUrl + '/addToWishList', model);
    }

}