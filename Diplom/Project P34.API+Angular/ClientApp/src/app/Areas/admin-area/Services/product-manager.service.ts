import { Injectable } from '@angular/core';
import { ApiResult } from './../../../Models/result.model';
import { ProductItem } from './../Models/product-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductManagerService {
  baseUrl = '/api/ProductManager';
  constructor(private http: HttpClient) {}
 
  getAllProducts() {
    return this.http.get(this.baseUrl);
  }

  removeProduct(id: string) {
    return this.http.post(this.baseUrl + '/RemoveProduct/' + id,  id , { headers: {'Content-Type': 'application/json'}});
  }

  getProduct(id: string) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  editProduct(id: string, model: ProductItem): Observable<ApiResult> {
    return this.http.post<ApiResult>(this.baseUrl + '/editProduct/' + id, model);
  }

  addProduct(model: ProductItem): Observable<ApiResult> {
    return this.http.post<ApiResult>(this.baseUrl + '/addProduct/', model);
  }
}
