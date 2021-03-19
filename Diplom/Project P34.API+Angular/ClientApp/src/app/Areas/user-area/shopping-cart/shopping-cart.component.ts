import { Component, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/home/product/product-view/model/product-item.model';
import { CartModel } from 'src/app/Models/cart';
import { ProductService } from 'src/app/home/product/product-view/service/product.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  model: CartModel = new CartModel();

  products: ProductItem[] = [];
  product: ProductItem = new ProductItem();

  constructor(private productService: ProductService,
    private notifier: NotifierService) { }

  ngOnInit() {

    const token = localStorage.getItem('token');
    if (token !== null) {

      const jwtData = token.split('.')[1];
      const decodedJwtJsonData = window.atob(jwtData);
      const decodedJwtData = JSON.parse(decodedJwtJsonData);
      console.log(decodedJwtData.id);
      this.productService.getCartProducts(decodedJwtData.id).subscribe(
        (data: CartModel) => {
          this.model = data;
          this.products = this.model.products;
        }
      );
    }


  }

}
