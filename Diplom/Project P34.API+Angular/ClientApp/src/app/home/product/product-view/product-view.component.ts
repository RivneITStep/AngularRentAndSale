import { Component, OnInit } from '@angular/core';
import { ProductItem } from './model/product-item.model';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(private productService: ProductService) {

    this.productService.getProduct('02fbaf7d-c40d-42d4-84e1-d212cf4b3f35').subscribe(
      (data: ProductItem) => {
          this.product = data;
        }
      );

    
  }

product: ProductItem = new ProductItem();

  ngOnInit():void {
    //BTS OF SIZE
    function makeActive(evt) {
      var i, sizeBtns;
      sizeBtns = document.getElementsByClassName("size-btn");
      for (i = 0; i < sizeBtns.length; i++) {
        sizeBtns[i].className = sizeBtns[i].className.replace(" active", "");
      }
      evt.currentTarget.className += " active";
    }
    document.getElementById("DefaultActive").click();
    //END OF THIS FUNCTION

  }


  

}
