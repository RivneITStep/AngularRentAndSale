import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './product-view/service/product.service';
import { ProductItem } from './product-view/model/product-item.model';
import { WishListModel } from '../../Models/wishlist.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  @Input()
  searchResult: ProductItem[];

  constructor(private productService: ProductService) 
  {
    this.productService.getProducts().subscribe(
      (data: ProductItem[]) => {
        this.products = data;
      }
    );
   }


  products: ProductItem[] = [];
  product: ProductItem = new ProductItem();
  wishList: WishListModel = new WishListModel();
  viewProduct(id: string){
    this.productService.temp = id;
  }

  addToWishList(id: string){
    this.wishList.id = id;
    this.productService.addToWishList(this.wishList);
  }

  ngOnInit() {
    console.log(this.searchResult);
  }

}
