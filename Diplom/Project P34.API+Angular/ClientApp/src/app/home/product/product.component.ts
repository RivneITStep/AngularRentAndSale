import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './product-view/service/product.service';
import { ProductItem } from './product-view/model/product-item.model';

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
  viewProduct(id: string){
    this.productService.temp = id;
  }

  ngOnInit() {
    console.log(this.searchResult);
  }

}
